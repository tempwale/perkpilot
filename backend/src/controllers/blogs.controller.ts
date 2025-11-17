import { Request, Response } from "express";
import mongoose from "mongoose";
import Blog from "../models/blogs.model.js";
import BlogPage, { IBlogPage } from "../models/blogpage.model.js";
import { BlogQueryParams, MongoRegexFilter } from "../types/index.js";
import type { IBlog } from "../models/blogs.model.js";


function generateSlug(heading: string): string {
  return heading
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") 
    .replace(/\s+/g, "-") 
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, ""); 
}

// GET all blogs with pagination and filtering
export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      published,
      q,
      sortBy = "-createdAt",
    } = req.query as BlogQueryParams;

    const pageNum = Math.max(Number(page) || 1, 1);
    const limitNum = Math.max(Number(limit) || 20, 1);
    const skip = (pageNum - 1) * limitNum;

    const filter: Record<string, MongoRegexFilter | boolean | string | unknown> = {};

    if (category) {
      filter.blogCategory = { $regex: category, $options: "i" };
    }

    if (published !== undefined) {
      filter.blogIsPublished = published === "true" || published === true;
    }

    if (q) {
      filter.$or = [
        { blogHeading: { $regex: q, $options: "i" } },
        { blogBody: { $regex: q, $options: "i" } },
        { blogCategory: { $regex: q, $options: "i" } },
      ] as unknown;
    }

    const sortCriteria: Record<string, 1 | -1> = {
      blogIsFeatured: -1,
    };

    if (sortBy.startsWith("-")) {
      const field = sortBy.substring(1);
      sortCriteria[field] = -1;
    } else {
      sortCriteria[sortBy] = 1;
    }

    const blogs = await Blog.find(filter)
      .populate("blogAuthor", "authorName authorTitle authorImageURL")
      .sort(sortCriteria)
      .skip(skip)
      .limit(limitNum)
      .exec();

    const total = await Blog.countDocuments(filter);

    res.json({
      data: blogs,
      pagination: {
        current: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error: unknown) {
    console.error("Error fetching blogs:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(500).json({ message: "Error fetching blogs", error: errorMessage });
  }
};

// GET blog by ID
export const getBlogById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      res.status(400).json({ message: "Invalid blog id" });
      return;
    }

    const blog = await Blog.findById(id)
      .populate("blogAuthor", "authorName authorTitle authorImageURL authorDescription")
      .exec();

    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    res.json(blog);
  } catch (error: unknown) {
    console.error("Error fetching blog:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(500).json({ message: "Error fetching blog", error: errorMessage });
  }
};

// GET blog by slug
export const getBlogBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({ blogSlug: slug.toLowerCase() })
      .populate("blogAuthor", "authorName authorTitle authorImageURL authorDescription")
      .exec();

    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    // Increment view count
    if (blog && typeof blog.incrementViews === "function") {
      await blog.incrementViews();
    } else {
      blog.blogViewCount += 1;
      await blog.save();
    }

    res.json(blog);
  } catch (error: unknown) {
    console.error("Error fetching blog by slug:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(500).json({ message: "Error fetching blog", error: errorMessage });
  }
};

// CREATE blog
export const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body as Partial<IBlog>;

    // Validate required fields
    if (!payload.blogHeading) {
      res.status(400).json({
        message: "blogHeading is required",
      });
      return;
    }

    // Generate slug if not provided
    if (!payload.blogSlug) {
      payload.blogSlug = generateSlug(payload.blogHeading);
    } else {
      // Normalize provided slug
      payload.blogSlug = generateSlug(payload.blogSlug);
    }

    // Check slug uniqueness
    const existingBlog = await Blog.findOne({ blogSlug: payload.blogSlug });
    if (existingBlog) {
      // Append timestamp to make it unique
      payload.blogSlug = `${payload.blogSlug}-${Date.now()}`;
    }

    // Validate author exists
    if (payload.blogAuthor) {
      if (!mongoose.Types.ObjectId.isValid(String(payload.blogAuthor))) {
        res.status(400).json({ message: "Invalid author id" });
        return;
      }
    }

    const blog = await Blog.create(payload);
    await blog.populate("blogAuthor", "authorName authorTitle authorImageURL");

    res.status(201).json(blog);
  } catch (error: unknown) {
    console.error("Error creating blog:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(400).json({ message: "Error creating blog", error: errorMessage });
  }
};

// UPDATE blog
export const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      res.status(400).json({ message: "Invalid blog id" });
      return;
    }

    const updatedData = req.body as Partial<IBlog>;

    // Handle slug update
    if (updatedData.blogSlug) {
      updatedData.blogSlug = generateSlug(updatedData.blogSlug);

      // Check slug uniqueness (excluding current blog)
      const existingBlog = await Blog.findOne({
        blogSlug: updatedData.blogSlug,
        _id: { $ne: id },
      });

      if (existingBlog) {
        res.status(400).json({ message: "Slug already exists" });
        return;
      }
    }

    // If heading changed and no slug provided, regenerate slug
    if (updatedData.blogHeading && !updatedData.blogSlug) {
      const currentBlog = await Blog.findById(id);
      if (currentBlog && currentBlog.blogHeading !== updatedData.blogHeading) {
        updatedData.blogSlug = generateSlug(updatedData.blogHeading);

        // Check uniqueness
        const existingBlog = await Blog.findOne({
          blogSlug: updatedData.blogSlug,
          _id: { $ne: id },
        });

        if (existingBlog) {
          updatedData.blogSlug = `${updatedData.blogSlug}-${Date.now()}`;
        }
      }
    }

    // Validate author if provided
    if (updatedData.blogAuthor) {
      if (!mongoose.Types.ObjectId.isValid(String(updatedData.blogAuthor))) {
        res.status(400).json({ message: "Invalid author id" });
        return;
      }
    }

    const blog = await Blog.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    })
      .populate("blogAuthor", "authorName authorTitle authorImageURL")
      .exec();

    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    console.log("Blog updated successfully:", blog._id);
    res.json(blog);
  } catch (error: unknown) {
    console.error("Error updating blog:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(400).json({ message: "Error updating blog", error: errorMessage });
  }
};

// DELETE blog
export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      res.status(400).json({ message: "Invalid blog id" });
      return;
    }

    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    res.json({ message: "Blog deleted successfully", deletedBlog: blog });
  } catch (error: unknown) {
    console.error("Error deleting blog:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(500).json({ message: "Error deleting blog", error: errorMessage });
  }
};


export const getBlogPage = async (_req: Request, res: Response): Promise<void> => {
  try {
    const blogPage: IBlogPage | null = await BlogPage.findOne();
    if (!blogPage) {
      res.json({
        status: "live",
        topTagline: "",
        mainHeadline: "Software Blogs",
        subHeadline: "In-depth reviews, comparisons, and insights about the latest software tools and productivity solutions.",
        tags: [],
      });
      return;
    }

    res.json(blogPage);
  } catch (error: unknown) {
    console.error("Error fetching blog page:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(400).json({ message: "Error fetching blog page", error: errorMessage });
  }
};


export const updateBlogPage = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedData: Partial<IBlogPage> = req.body;
    const allowedFields: (keyof IBlogPage)[] = [
      "status",
      "topTagline",
      "mainHeadline",
      "subHeadline",
      "tags",
    ];
    const filteredData: Partial<IBlogPage> = {};
    for (const key of allowedFields) {
      if (key in updatedData) {
        filteredData[key] = updatedData[key];
      }
    }

    if (filteredData.status !== undefined) {
      if (filteredData.status !== "live" && filteredData.status !== "maintenance") {
        res.status(400).json({
          message: "Status must be either 'live' or 'maintenance'",
        });
        return;
      }
    }

    if (filteredData.tags !== undefined) {
      if (!Array.isArray(filteredData.tags)) {
        res.status(400).json({ message: "'tags' must be an array of strings" });
        return;
      }
      filteredData.tags = filteredData.tags.map((tag) => String(tag).trim()).filter((tag) => tag.length > 0);
    }

    let blogPage: IBlogPage | null = await BlogPage.findOneAndUpdate(
      {},
      filteredData,
      {
        new: true,
        runValidators: true,
      }
    );

    // If no BlogPage exists, create one (requires `mainHeadline` in filteredData)
    if (!blogPage) {
      if (!filteredData.mainHeadline) {
        res.status(400).json({
          message:
            "No BlogPage exists — creating one requires the 'mainHeadline' field",
        });
        return;
      }

      blogPage = await BlogPage.create(filteredData);
    }

    res.json(blogPage);
  } catch (error: unknown) {
    console.error("Error updating blog page:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(400).json({ message: "Error updating blog page", error: errorMessage });
  }
};

export default {
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogPage,
  updateBlogPage,
};

