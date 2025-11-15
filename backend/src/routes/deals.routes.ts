import express from "express";
import {
  getAllDeals,
  getDealById,
  createDeal,
  updateDeal,
  deleteDeal,
  getDealPage,
  updateDealPage,
} from '../controllers/deals.controller.js';

const router = express.Router();

// Deal page routes (specific) - place before param routes to avoid collisions
router.get("/dealpage", getDealPage);
router.put("/dealpage", updateDealPage);

// Collection routes
// GET all deals
router.get("/", getAllDeals);

// POST create a new deal
router.post("/", createDeal);

// ID-based routes (param) - declared after specific routes
// GET a single deal by ID
router.get("/:id", getDealById);

// PUT update an existing deal
router.put("/:id", updateDeal);

// DELETE a deal
router.delete("/:id", deleteDeal);

export default router;
