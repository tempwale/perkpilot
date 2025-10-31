import { Request, Response } from "express";
import mongoose from "mongoose";
import Deal, { IDeal } from "../models/deal.model";
import DealPage, { IDealPage } from "../models/dealpage.model";
// GET all deals
export const getAllDeals = async (_req: Request, res: Response) => {
  try {
    const deals: IDeal[] = await Deal.find();
    console.log("Fetched deals:", deals);
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

// CREATE new deal
export const createDeal = async (req: Request, res: Response) => {
  try {
    // Accept both frontend shapes: { title } or { name },
    // and numeric fields like discountPercentage / savingsAmount in addition to string discount/savings.
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
      primary_cta_text,
      secondary_cta_text,
      primary_cta_link,
      secondary_cta_link,
    } = req.body as any;

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

// UPDATE deal
export const updateDeal = async (req: Request, res: Response) => {
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
      "primary_cta_text",
      "secondary_cta_text",
      "primary_cta_link",
      "secondary_cta_link",
    ];
    const filteredData: Partial<IDeal> = {};
    for (const key of allowedFields) {
      if (key in updatedData)
        (filteredData as any)[key] = (updatedData as any)[key];
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
    if (!dealPage)
      return res.status(404).json({ message: "Deal page not found" });

    res.json(dealPage);
  } catch (error) {
    res.status(400).json({ message: "Error fetching deal page", error });
  }
};

// UPDATE deal page
export const updateDealPage = async (req: Request, res: Response) => {
  try {
    const updatedData: Partial<IDealPage> = req.body;

    // Ensure only valid fields are updated
    const allowedFields: (keyof IDealPage)[] = [
      "topTagline",
      "heading",
      "subheading",
      "deals",
    ];
    const filteredData: Partial<IDealPage> = {};
    for (const key of allowedFields) {
      if (key in updatedData)
        (filteredData as any)[key] = (updatedData as any)[key];
    }

    // Validate 'deals' if provided: must be an array of valid ObjectId strings
    if (filteredData.deals !== undefined) {
      if (!Array.isArray(filteredData.deals)) {
        return res
          .status(400)
          .json({ message: "'deals' must be an array of Deal _id strings" });
      }

      const invalid = (filteredData.deals as any[]).some(
        (d) => !mongoose.Types.ObjectId.isValid(String(d))
      );
      if (invalid) {
        return res.status(400).json({
          message: "All 'deals' entries must be valid MongoDB ObjectId strings",
        });
      }

      // Optionally convert string ids to ObjectId instances before storing
      filteredData.deals = (filteredData.deals as any[]).map(
        (d) => new mongoose.Types.ObjectId(String(d))
      ) as any;
    }

    // Update the singleton DealPage (no id). Try findOneAndUpdate first.
    let dealPage: IDealPage | null = await DealPage.findOneAndUpdate(
      {},
      filteredData,
      {
        new: true,
        runValidators: true,
      }
    ).populate("deals");

    // If no DealPage exists, create one (requires `heading` in filteredData)
    if (!dealPage) {
      if (!filteredData.heading) {
        return res.status(400).json({
          message:
            "No DealPage exists — creating one requires the 'heading' field",
        });
      }

      const created = await DealPage.create(filteredData as any);
      dealPage = await DealPage.findById(created._id).populate("deals");
    }

    res.json(dealPage);
  } catch (error) {
    res.status(400).json({ message: "Error updating deal page", error });
  }
};
