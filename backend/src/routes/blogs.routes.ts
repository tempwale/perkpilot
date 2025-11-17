import express from "express";
import {
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogPage,
  updateBlogPage,
} from "../controllers/blogs.controller.js";

const router = express.Router();

// Blog page routes
router.get("/blogpage", getBlogPage);
router.put("/blogpage", updateBlogPage);

// Collection routes
// GET all blogs with pagination and filtering
router.get("/", getAllBlogs);

// POST create a new blog
router.post("/", createBlog);

// Slug-based route (must be before :id route)
// GET a single blog by slug
router.get("/slug/:slug", getBlogBySlug);

// ID-based routes (param) - declared after specific routes
// GET a single blog by ID
router.get("/:id", getBlogById);

// PUT update an existing blog
router.put("/:id", updateBlog);

// PATCH update blog fields (e.g., featured toggle)
router.patch("/:id", updateBlog);

// DELETE a blog
router.delete("/:id", deleteBlog);

export default router;
