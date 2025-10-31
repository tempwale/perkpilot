import mongoose, { Schema, Document } from "mongoose";

export interface IDealPage extends Document {
  topTagline?: string;
  heading: string;
  subheading?: string;
  // Exactly six deal ObjectId references
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
    deals: {
      type: [{ type: Schema.Types.ObjectId, ref: "Deal" }],
      validate: {
        validator: function (v: mongoose.Types.ObjectId[]) {
          return Array.isArray(v) && v.length === 6;
        },
        message: "`deals` must be an array containing exactly 6 deal IDs",
      },
      required: [true, "deals array is required and must contain 6 IDs"],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IDealPage>("DealPage", dealPageSchema);
