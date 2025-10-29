import { Request, Response } from "express";
import Deal, { IDeal } from "../models/deal.model";

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
      if (key in updatedData) filteredData[key] = updatedData[key];
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
