import { Request, Response } from "express";
import mongoose from "mongoose";
import Review from '../models/reviews.model.js';
import { ReviewQueryParams, MongoRegexFilter } from '../types/index.js';

// GET all reviews with pagination and filtering
export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 20,
      productName,
      sortBy = "-createdAt",
    } = req.query as ReviewQueryParams;

    const pageNum = Math.max(Number(page) || 1, 1);
    const limitNum = Math.max(Number(limit) || 20, 1);
    const skip = (pageNum - 1) * limitNum;

    const filter: Record<string, MongoRegexFilter> = {};
    if (productName) {
      filter.productName = { $regex: productName, $options: "i" };
    }

    const reviews = await Review.find(filter)
      .sort(sortBy)
      .skip(skip)
      .limit(limitNum)
      .exec();

    const total = await Review.countDocuments(filter);

    res.json({
      data: reviews,
      pagination: {
        current: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};

// GET review by ID
export const getReviewById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      return res.status(400).json({ message: "Invalid review id" });
    }

    const review = await Review.findById(id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Error fetching review", error });
  }
};

// CREATE review
export const createReview = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // Validate required fields
    if (!payload.productName || !payload.reviewText || !payload.rating) {
      return res.status(400).json({
        message: "productName, reviewText, and rating are required",
      });
    }

    if (payload.rating < 1 || payload.rating > 5) {
      return res
        .status(400)
        .json({ message: "Rating must be between 1 and 5" });
    }

    const review = await Review.create(payload);
    res.status(201).json(review);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    res
      .status(400)
      .json({ message: "Error creating review", error: errorMessage });
  }
};

// UPDATE review
export const updateReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      return res.status(400).json({ message: "Invalid review id" });
    }

    const updatedData = req.body;

    // Validate rating if provided
    if (
      updatedData.rating &&
      (updatedData.rating < 1 || updatedData.rating > 5)
    ) {
      return res
        .status(400)
        .json({ message: "Rating must be between 1 and 5" });
    }

    const review = await Review.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(400).json({ message: "Error updating review", error });
  }
};

// DELETE review
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      return res.status(400).json({ message: "Invalid review id" });
    }

    const review = await Review.findByIdAndDelete(id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted successfully", deletedReview: review });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review", error });
  }
};

export default {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
