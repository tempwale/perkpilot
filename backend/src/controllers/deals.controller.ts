import { Request, Response } from "express";
import mongoose from "mongoose";
import Deal, { IDeal } from "../models/deal.model.js";
import DealPage, { IDealPage } from "../models/dealpage.model.js";
import Stats, { IStats } from "../models/stats.model.js";
import { DealCreateBody } from '../types/index.js';

// GET all deals or deal page (if ?page=true)
export const getAllDeals = async (req: Request, res: Response) => {
  try {
    // Check if requesting deal page data
    if (req.query.page === "true") {
      const dealPage: IDealPage | null = await DealPage.findOne().populate(
        "deals"
      );
      if (!dealPage) {
        return res.status(404).json({ message: "Deal page not found" });
      }
      return res.json(dealPage);
    }
    
    // Handle search query parameter
    const { q } = req.query;
    let deals: IDeal[];
    
    if (q && typeof q === "string" && q.trim()) {
      // Search deals by title, description, category, or features
      const searchRegex = new RegExp(q.trim(), "i"); // Case-insensitive search
      deals = await Deal.find({
        $or: [
          { title: searchRegex },
          { description: searchRegex },
          { category: searchRegex },
          { tag: searchRegex },
          { features: searchRegex },
        ],
      }).sort({ createdAt: -1 });
    } else {
      // Return all deals if no search query
      deals = await Deal.find().sort({ createdAt: -1 });
    }
    
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching deals", error });
  }
};

// GET one deal by ID
export const getDealById = async (req: Request, res: Response) => {
  try {
    const deal: IDeal | null = await Deal.findById(req.params.id);
    if (!deal) return res.status(404).json({ message: "Deal not found" });
    res.json(deal);
  } catch (error) {
    res.status(500).json({ message: "Error fetching deal", error });
  }
};

// CREATE new deal, update deal page (if ?page=true), or update stats (if ?stats=true)
export const createDeal = async (req: Request, res: Response) => {
  // Check if updating deal page
  if (req.query.page === "true") {
    return updateDealPage(req, res);
  }
  
  try {
    const {
      title: bodyTitle,
      name,
      category,
      description,
      features,
      discount,
      discountPercentage,
      savings,
      savingsAmount,
      tag,
      logoUri,
      verified,
      rating,
      primary_cta_text,
      secondary_cta_text,
      primary_cta_link,
      secondary_cta_link,
    } = req.body as DealCreateBody;

    const title = bodyTitle ?? name;

    // Normalize discount/savings to string forms expected by the model
    let normalizedDiscount: string | undefined = discount;
    if (
      (normalizedDiscount === undefined || normalizedDiscount === null) &&
      discountPercentage !== undefined
    ) {
      // If discountPercentage provided as number, format as human-readable string
      normalizedDiscount = `${discountPercentage}% OFF`;
    }

    let normalizedSavings: string | undefined = savings;
    if (
      (normalizedSavings === undefined || normalizedSavings === null) &&
      savingsAmount !== undefined
    ) {
      // Format savings amount as human-readable string
      // If savingsAmount is numeric, prefix with currency text; leave as-is if already contains text
      normalizedSavings =
        typeof savingsAmount === "number"
          ? `Save Up To $${savingsAmount}`
          : String(savingsAmount);
    }

    // Validate required fields after normalization
    if (
      !title ||
      !category ||
      !description ||
      normalizedDiscount === undefined ||
      normalizedSavings === undefined
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const deal: IDeal = await Deal.create({
      title,
      category,
      description,
      features: features || [],
      discount: normalizedDiscount,
      savings: normalizedSavings,
      tag: tag || null,
      logoUri: logoUri || null,
      verified: verified ?? false, // default false if not provided
      rating: rating || null,
      primary_cta_text: primary_cta_text || null,
      secondary_cta_text: secondary_cta_text || null,
      primary_cta_link: primary_cta_link || null,
      secondary_cta_link: secondary_cta_link || null,
    });

    res.status(201).json(deal);
  } catch (error) {
    res.status(400).json({ message: "Error creating deal", error });
  }
};

// UPDATE deal, deal page (if ?page=true), or stats (if ?stats=true)
export const updateDeal = async (req: Request, res: Response) => {
  // Check if updating deal page (only for PUT /api/deals?page=true, not PUT /api/deals/:id)
  if (req.query.page === "true" && !req.params.id) {
    return updateDealPage(req, res);
  }
  
  try {
    const updatedData: Partial<IDeal> = req.body;

    // Ensure only valid fields are updated
    const allowedFields: (keyof IDeal)[] = [
      "title",
      "category",
      "description",
      "features",
      "discount",
      "savings",
      "tag",
      "logoUri",
      "verified",
      "rating",
      "primary_cta_text",
      "secondary_cta_text",
      "primary_cta_link",
      "secondary_cta_link",
    ];
    const filteredData: Partial<IDeal> = {};
    for (const key of allowedFields) {
      if (key in updatedData) {
        filteredData[key] = updatedData[key];
      }
    }

    const deal: IDeal | null = await Deal.findByIdAndUpdate(
      req.params.id,
      filteredData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!deal) return res.status(404).json({ message: "Deal not found" });

    res.json(deal);
  } catch (error) {
    res.status(400).json({ message: "Error updating deal", error });
  }
};

// DELETE deal
export const deleteDeal = async (req: Request, res: Response) => {
  try {
    const deal: IDeal | null = await Deal.findByIdAndDelete(req.params.id);
    if (!deal) return res.status(404).json({ message: "Deal not found" });
    res.json({ message: "Deal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting deal", error });
  }
};

// GET deal page
export const getDealPage = async (_req: Request, res: Response) => {
  try {
    const dealPage: IDealPage | null = await DealPage.findOne().populate(
      "deals"
    );
    if (!dealPage) {
      return res.status(404).json({ message: "Deal page not found" });
    }

    res.json(dealPage);
  } catch (error) {
    res.status(400).json({ message: "Error fetching deal page", error });
  }
};

// UPDATE deal page
export const updateDealPage = async (req: Request, res: Response) => {
  try {
    const updatedData: Partial<IDealPage> = req.body;

    const allowedFields: (keyof IDealPage)[] = [
      "topTagline",
      "heading",
      "subheading",
      "status",
      "deals",
    ];
    const filteredData: Partial<IDealPage> = {};
    for (const key of allowedFields) {
      if (key in updatedData) {
        if (updatedData[key] !== undefined) {
          filteredData[key] = updatedData[key];
        }
      }
    }

    if (filteredData.deals !== undefined) {
      if (!Array.isArray(filteredData.deals)) {
        return res
          .status(400)
          .json({ message: "'deals' must be an array of Deal _id strings" });
      }
      if (filteredData.deals.length > 0) {
      const invalid = filteredData.deals.some(
        (d) => !mongoose.Types.ObjectId.isValid(String(d))
      );
      if (invalid) {
        return res.status(400).json({
          message: "All 'deals' entries must be valid MongoDB ObjectId strings",
        });
      }

        // Convert string ids to ObjectId instances before storing
      filteredData.deals = filteredData.deals.map(
        (d) => new mongoose.Types.ObjectId(String(d))
      );
      } else {
        // Empty array - set to empty array
        filteredData.deals = [];
      }
    }

    // Update the singleton DealPage (no id). Try findOneAndUpdate first.
    let dealPage: IDealPage | null = await DealPage.findOneAndUpdate(
      {},
      filteredData,
      {
        new: true,
        runValidators: true,
      }
    );
    
    // Populate deals after update
    if (dealPage) {
      dealPage = await DealPage.findById(dealPage._id).populate("deals");
    }

    // If no DealPage exists, create one (requires `heading` in filteredData)
    if (!dealPage) {
      if (!filteredData.heading) {
        return res.status(400).json({
          message:
            "No DealPage exists — creating one requires the 'heading' field",
        });
      }

      if (!filteredData.status) {
        filteredData.status = "live";
      }

      const created = await DealPage.create(filteredData);
      dealPage = await DealPage.findById(created._id).populate("deals");
    }

    res.json(dealPage);
  } catch (error) {
    res.status(400).json({ message: "Error updating deal page", error });
  }
};

// UPDATE stats
export const updateStats = async (req: Request, res: Response) => {
  try {
    const { stats: statsData } = req.body as { stats?: Array<{ numberValue: string; message: string }> };

    if (!Array.isArray(statsData)) {
      return res.status(400).json({ message: "'stats' must be an array" });
    }

    // Validate each stat entry
    for (const stat of statsData) {
      if (!stat.numberValue || !stat.message) {
        return res.status(400).json({ 
          message: "Each stat must have 'numberValue' and 'message' fields" 
        });
      }
    }

    // Update or create the singleton Stats document
    const stats: IStats | null = await Stats.findOneAndUpdate(
      {},
      { stats: statsData },
      {
        new: true,
        runValidators: true,
        upsert: true, // Create if doesn't exist
      }
    );

    res.json(stats);
  } catch (error) {
    res.status(400).json({ message: "Error updating stats", error });
  }
};

// GET stats
export const getStats = async (_req: Request, res: Response) => {
  try {
    const stats = await Stats.findOne();
    if (!stats) {
      return res.json({ stats: [] });
    }
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats", error });
  }
};
