import express from "express";
import {
  createComparison,
  getComparisonById,
  updateComparison,
  deleteComparison,
  getAllComparisons,
  getComparisonPageSettings,
  updateComparisonPageSettings,
} from "../controllers/comparision.controller.js";

const router = express.Router();

// Collection routes
router.post("/", createComparison);
router.get("/", getAllComparisons);
router.get("/page/settings", getComparisonPageSettings);
router.put("/page/settings", updateComparisonPageSettings);
// Item routes
router.get("/:id", getComparisonById);
router.put("/:id", updateComparison);
router.delete("/:id", deleteComparison);

export default router;
