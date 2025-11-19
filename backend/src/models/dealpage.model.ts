import mongoose, { Schema, Document } from "mongoose";

export interface IDealPage extends Document {
  topTagline?: string;
  heading: string;
  subheading?: string;
  status?: "live" | "maintenance";
  deals: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const dealPageSchema = new Schema<IDealPage>(
  {
    topTagline: {
      type: String,
      default: null,
    },
    heading: {
      type: String,
      required: [true, "Heading is required"],
      trim: true,
    },
    subheading: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["live", "maintenance"],
      default: "live",
    },
    deals: {
      type: [{ type: Schema.Types.ObjectId, ref: "Deal" }],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IDealPage>("DealPage", dealPageSchema);
