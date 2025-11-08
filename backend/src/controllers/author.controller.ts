import { Request, Response } from "express";
import mongoose from "mongoose";
import Author from "../models/author.model";

// GET all authors with pagination and filtering
export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 20,
      authorName,
      authorIndustry,
      sortBy = "-createdAt",
    } = req.query as any;

    const pageNum = Math.max(Number(page) || 1, 1);
    const limitNum = Math.max(Number(limit) || 20, 1);
    const skip = (pageNum - 1) * limitNum;

    const filter: Record<string, any> = {};
    if (authorName) {
      filter.authorName = { $regex: authorName, $options: "i" };
    }
    if (authorIndustry) {
      filter.authorIndustry = { $regex: authorIndustry, $options: "i" };
    }

    const authors = await Author.find(filter)
      .sort(sortBy)
      .skip(skip)
      .limit(limitNum)
      .exec();

    const total = await Author.countDocuments(filter);

    res.json({
      data: authors,
      pagination: {
        current: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching authors", error });
  }
};

// GET author by ID
export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      return res.status(400).json({ message: "Invalid author id" });
    }

    const author = await Author.findById(id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: "Error fetching author", error });
  }
};

// CREATE author
export const createAuthor = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // Validate required fields
    if (
      !payload.authorTitle ||
      !payload.authorName ||
      !payload.authorIndustry ||
      !payload.authorViewProfileURL ||
      !payload.authorDescription
    ) {
      return res.status(400).json({
        message:
          "authorTitle, authorName, authorIndustry, authorViewProfileURL, and authorDescription are required",
      });
    }

    const author = await Author.create(payload);
    res.status(201).json(author);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: "Error creating author", error: error.message });
  }
};

// UPDATE author
export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      return res.status(400).json({ message: "Invalid author id" });
    }

    const updatedData = req.body;

    const author = await Author.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(400).json({ message: "Error updating author", error });
  }
};

// DELETE author
export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      return res.status(400).json({ message: "Invalid author id" });
    }

    const author = await Author.findByIdAndDelete(id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json({ message: "Author deleted successfully", deletedAuthor: author });
  } catch (error) {
    res.status(500).json({ message: "Error deleting author", error });
  }
};

export default {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
