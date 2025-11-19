import mongoose, { Schema, Document } from "mongoose";

export interface IStat extends Document {
  numberValue: string;
  message: string;
}

export interface IStats extends Document {
  stats: IStat[];
  createdAt: Date;
  updatedAt: Date;
}

const statSchema = new Schema<IStat>(
  {
    numberValue: {
      type: String,
      required: [true, "Number value is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  { _id: false }
);

const statsSchema = new Schema<IStats>(
  {
    stats: {
      type: [statSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IStats>("Stats", statsSchema);

