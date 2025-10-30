import express from "express";
import {
  getAllDeals,
  getDealById,
  createDeal,
  updateDeal,
  deleteDeal,
} from "../controllers/deals.controller";

const router = express.Router();

// GET all deals
router.get("/", getAllDeals);

// GET a single deal by ID
router.get("/:id", getDealById);

// POST create a new deal
router.post("/", createDeal);

// PUT update an existing deal
router.put("/:id", updateDeal);

// DELETE a deal
router.delete("/:id", deleteDeal);

export default router;
