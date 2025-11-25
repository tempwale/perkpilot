import mongoose, { Schema, Document } from "mongoose";

export interface IDeal extends Document {
  title: string;
  category: string;
  description: string;
  features: string[]; // list of included features
  discount: string;
  savings: string;
  tag?: string; // e.g., "Hot Deal"
  logoUri?: string; // URI of logo image
  verified?: boolean; // is deal verified
  rating?: number; 
  primary_cta_text?: string;
  secondary_cta_text?: string;
  primary_cta_link?: string;
  secondary_cta_link?: string;
  createdAt: Date;
  updatedAt: Date;
}

const dealSchema = new Schema<IDeal>(
  {
    title: {
      type: String,
      required: [true, "Deal title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    features: {
      type: [String],
      default: [],
    },
    discount: {
      type: String,
      required: [true, "Discount is required"],
    },
    savings: {
      type: String,
      required: [true, "Savings is required"],
    },
    tag: {
      type: String,
      default: null,
    },
    logoUri: {
      type: String,
      default: null,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: null,
      min: 0,
      max: 5,
    },
    primary_cta_text: {
      type: String,
      default: null,
    },
    secondary_cta_text: {
      type: String,
      default: null,
    },
    primary_cta_link: {
      type: String,
      default: null,
    },
    secondary_cta_link: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

dealSchema.index({
  title: "text",
  description: "text",
  category: "text",
  tag: "text",
  features: "text",
}); 
dealSchema.index({ createdAt: -1 }); 

export default mongoose.model<IDeal>("Deal", dealSchema);
