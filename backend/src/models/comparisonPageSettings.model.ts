import mongoose, { Schema } from "mongoose";
import type { IComparisonPageSettings } from "../types/comparison.types.js";

const ComparisonPageSettingsSchema = new Schema<IComparisonPageSettings>(
  {
    singletonKey: {
      type: String,
      default: "comparison-page-settings",
      unique: true,
      immutable: true,
      select: false,
    },
    comparisonPageStatus: {
      type: String,
      enum: ["live", "maintenance"],
      default: "live",
    },
    comparisonPageTopTagline: {
      type: String,
      default: "For Software Comparisons",
      trim: true,
    },
    comparisonPageHeading: {
      type: String,
      default: "Software Comparisons",
      trim: true,
    },
    comparisonPageSubheading: {
      type: String,
      default:
        "In-depth side-by-side comparisons to help you choose the right tools for your workflow.",
      trim: true,
    },
    comparisonPageTags: {
      type: [String],
      default: [],
    },
    featuredComparisons: [
      {
        type: Schema.Types.ObjectId,
        ref: "ToolComparisonBlog",
      },
    ],
  },
  {
    timestamps: true,
    collection: "comparisonPageSettings",
  }
);

ComparisonPageSettingsSchema.index(
  { singletonKey: 1 },
  { unique: true, name: "singleton_key_index" }
);

const ComparisonPageSettings =
  mongoose.models.ComparisonPageSettings ??
  mongoose.model<IComparisonPageSettings>(
    "ComparisonPageSettings",
    ComparisonPageSettingsSchema
  );

export default ComparisonPageSettings;


