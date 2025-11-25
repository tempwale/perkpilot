import { Document, Types } from "mongoose";

export interface IComparisonPageSettings extends Document {
  comparisonPageStatus: "live" | "maintenance";
  comparisonPageTopTagline: string;
  comparisonPageHeading: string;
  comparisonPageSubheading: string;
  comparisonPageTags: string[];
  featuredComparisons: Types.ObjectId[];
  singletonKey?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ComparisonPageSettingsBody {
  comparisonPageStatus?: "live" | "maintenance";
  comparisonPageTopTagline?: string;
  comparisonPageHeading?: string;
  comparisonPageSubheading?: string;
  comparisonPageTags?: string[];
  featuredComparisons?: string[];
}


