import express from "express";
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviews.controller";

const router = express.Router();

// Collection routes for individual reviews
// GET all reviews with pagination and filtering
router.get("/", getAllReviews);

// POST create a new review
router.post("/", createReview);

// ID-based routes (param) - declared after specific routes
// GET a single review by ID
router.get("/:id", getReviewById);

// PUT update an existing review
router.put("/:id", updateReview);

// DELETE a review
router.delete("/:id", deleteReview);

export default router;
