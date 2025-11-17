import mongoose, { Schema, Document } from "mongoose";

export interface IBlogPage extends Document {
  status: "live" | "maintenance";
  
  topTagline?: string;
  mainHeadline: string;
  subHeadline?: string;
  tags?: string[];
  
  createdAt: Date;
  updatedAt: Date;
}

const blogPageSchema = new Schema<IBlogPage>(
  {
    status: {
      type: String,
      enum: ["live", "maintenance"],
      default: "live",
      required: [true, "Status is required"],
    },
    topTagline: {
      type: String,
      default: null,
      trim: true,
    },
    mainHeadline: {
      type: String,
      required: [true, "Main headline is required"],
      trim: true,
    },
    subHeadline: {
      type: String,
      default: null,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IBlogPage>("BlogPage", blogPageSchema);

