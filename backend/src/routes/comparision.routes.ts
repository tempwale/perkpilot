import express from "express";
import {
  createComparison,
  getComparisonById,
  updateComparison,
  deleteComparison,
  getAllComparisons,
} from "../controllers/comparision.controller";

const router = express.Router();

// Collection routes
router.post("/", createComparison);
router.get("/", getAllComparisons);
// Item routes
router.get("/:id", getComparisonById);
router.put("/:id", updateComparison);
router.delete("/:id", deleteComparison);

export default router;
