import express from "express";
import {
  getAllReviews,
  getReviewPageSettings,
  updateReviewPageSettings,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviews.controller.js";

const router = express.Router();

// Collection routes for individual reviews
router.get("/", getAllReviews);

// Review page settings routes
router.get("/page/settings", getReviewPageSettings);
router.put("/page/settings", updateReviewPageSettings);

router.post("/", createReview);

// ID-based routes (param) - declared after specific routes
// GET a single review by ID
router.get("/:id", getReviewById);

// PUT update an existing review
router.put("/:id", updateReview);

// DELETE a review
router.delete("/:id", deleteReview);

export default router;
