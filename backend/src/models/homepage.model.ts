import mongoose, { Schema, Document } from "mongoose";

export interface IHomePage extends Document {
  status: "live" | "maintenance";

  hero: {
    topTagline: string;
    mainHeadline: string;
    subHeadline: string;
    ctaText?: string;
    ctaLink?: string;
    heroImage?: string; 
  };

  discountedIcons: {
    topTagline: string;
    mainHeadline: string;
    subHeadline: string;
    ctaText?: string;
    ctaLink?: string;
    icons: Array<{
      url: string;
      alt?: string;
    }>;
  };

  stats: Array<{
    numberValue: string;
    message: string;
  }>;

  topPicks: {
    sectionTitle: string;
    body: string;
    deals: Array<mongoose.Types.ObjectId | string>; // References to Deal documents
  };

  softwareComparisons: {
    sectionTitle: string;
    comparisons: Array<mongoose.Types.ObjectId | string>; 
  };

  topReviews: {
    sectionTitle: string;
    body: string;
    reviews: Array<mongoose.Types.ObjectId | string>;
  };

  createdAt: Date;
  updatedAt: Date;
}

const homePageSchema = new Schema<IHomePage>(
  {
    status: {
      type: String,
      enum: ["live", "maintenance"],
      default: "live",
      required: [true, "Status is required"],
    },

    hero: {
      topTagline: {
        type: String,
        default: "For Expert Insights",
        trim: true,
      },
      mainHeadline: {
        type: String,
        default: "Software Homes",
        trim: true,
      },
      subHeadline: {
        type: String,
        default: "In-depth reviews, comparisons, and insights about the latest software tools and productivity solutions.",
        trim: true,
      },
      ctaText: {
        type: String,
        default: "",
        trim: true,
      },
      ctaLink: {
        type: String,
        default: "",
        trim: true,
      },
      heroImage: {
        type: String,
        default: null,
      },
    },

    discountedIcons: {
      topTagline: {
        type: String,
        default: "For Expert Insights",
        trim: true,
      },
      mainHeadline: {
        type: String,
        default: "Software Deals",
        trim: true,
      },
      subHeadline: {
        type: String,
        default: "In-depth reviews, comparisons, and insights about the latest software tools and productivity solutions.",
        trim: true,
      },
      ctaText: {
        type: String,
        default: "",
        trim: true,
      },
      ctaLink: {
        type: String,
        default: "",
        trim: true,
      },
      icons: {
        type: [{
          url: { type: String, required: true },
          alt: { type: String, default: "" },
        }],
        default: [],
      },
    },

    stats: {
      type: [{
        numberValue: { type: String, required: true },
        message: { type: String, required: true },
      }],
      default: [],
    },

    topPicks: {
      sectionTitle: {
        type: String,
        default: "Top Picks",
        trim: true,
      },
      body: {
        type: String,
        default: "Discover our top-rated software deals",
        trim: true,
      },
      deals: {
        type: [{ type: Schema.Types.ObjectId, ref: "Deal" }],
        default: [],
      },
    },

    softwareComparisons: {
      sectionTitle: {
        type: String,
        default: "Software Comparisons",
        trim: true,
      },
      comparisons: {
        type: [{ type: Schema.Types.ObjectId, ref: "ToolComparisonBlog" }],
        default: [],
      },
    },

    topReviews: {
      sectionTitle: {
        type: String,
        default: "Top SaaS Reviews",
        trim: true,
      },
      body: {
        type: String,
        default: "Read our expert reviews",
        trim: true,
      },
      reviews: {
        type: [{ type: Schema.Types.ObjectId, ref: "Review" }],
        default: [],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IHomePage>("HomePage", homePageSchema);
