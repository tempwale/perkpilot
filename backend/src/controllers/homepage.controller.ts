import { Request, Response } from "express";
import HomePage, { IHomePage } from "../models/homepage.model.js";

export const getHomePage = async (req: Request, res: Response) => {
  try {
    let homePage: IHomePage | null = await HomePage.findOne()
      .populate("topPicks.deals")
      .populate("softwareComparisons.comparisons")
      .populate("topReviews.reviews");

    if (!homePage) {
      homePage = await HomePage.create({});
      await homePage.populate("topPicks.deals");
      await homePage.populate("softwareComparisons.comparisons");
      await homePage.populate("topReviews.reviews");
    }

    res.json(homePage);
  } catch (error) {
    res.status(500).json({ message: "Error fetching homepage", error });
  }
};

export const updateHomePage = async (req: Request, res: Response) => {
  try {
    const updateData = req.body;

    let homePage: IHomePage | null = await HomePage.findOne();

    if (!homePage) {
      homePage = await HomePage.create(updateData);
    } else {
      Object.assign(homePage, updateData);
      await homePage.save();
    }

    await homePage.populate("topPicks.deals");
    await homePage.populate("softwareComparisons.comparisons");
    await homePage.populate("topReviews.reviews");

    res.json(homePage);
  } catch (error) {
    res.status(500).json({ message: "Error updating homepage", error });
  }
};

export const updateHomePageSection = async (req: Request, res: Response) => {
  try {
    const { section } = req.params;
    const sectionData = req.body;

    const validSections = [
      "hero",
      "discountedIcons",
      "stats",
      "topPicks",
      "softwareComparisons",
      "topReviews",
      "status",
    ] as const;

    if (!validSections.includes(section as typeof validSections[number])) {
      return res.status(400).json({ message: "Invalid section name" });
    }

    let homePage: IHomePage | null = await HomePage.findOne();

    if (!homePage) {
      homePage = await HomePage.create({});
    }

    if (section === "status") {
      homePage.status = sectionData.status;
    } else {
      const validSection = section as keyof Omit<IHomePage, "_id" | "status" | "createdAt" | "updatedAt" | "__v">;
      homePage[validSection] = sectionData;
    }

    await homePage.save();

    await homePage.populate("topPicks.deals");
    await homePage.populate("softwareComparisons.comparisons");
    await homePage.populate("topReviews.reviews");

    res.json(homePage);
  } catch (error) {
    res.status(500).json({ message: "Error updating homepage section", error });
  }
};

// DELETE homepage 
export const resetHomePage = async (req: Request, res: Response) => {
  try {
    await HomePage.deleteMany({});
    const newHomePage = await HomePage.create({});

    await newHomePage.populate("topPicks.deals");
    await newHomePage.populate("softwareComparisons.comparisons");
    await newHomePage.populate("topReviews.reviews");

    res.json({ message: "Homepage reset to defaults", homePage: newHomePage });
  } catch (error) {
    res.status(500).json({ message: "Error resetting homepage", error });
  }
};
