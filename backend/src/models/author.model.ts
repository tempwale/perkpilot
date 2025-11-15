import mongoose, { Schema, Document } from "mongoose";

export interface IAuthor extends Document {
  authorTitle: string;
  authorName: string;
  authorIndustry: string;
  authorViewProfileURL: string;
  authorDescription: string;
  authorImageURL?: string;
  authorXAccount?: string;
  authorIGAccount?: string;
  authorLinkedinAccount?: string;
  createdAt: Date;
  updatedAt: Date;
}

const authorSchema = new Schema<IAuthor>(
  {
    authorTitle: {
      type: String,
      required: [true, "Author title is required"],
      trim: true,
    },
    authorName: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
    },
    authorIndustry: {
      type: String,
      required: [true, "Author industry is required"],
      trim: true,
    },
    authorViewProfileURL: {
      type: String,
      required: [true, "Author view profile URL is required"],
      trim: true,
    },
    authorDescription: {
      type: String,
      required: [true, "Author description is required"],
    },
    authorImageURL: {
      type: String,
      default: null,
    },
    authorXAccount: {
      type: String,
      default: null,
      trim: true,
    },
    authorIGAccount: {
      type: String,
      default: null,
      trim: true,
    },
    authorLinkedinAccount: {
      type: String,
      default: null,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IAuthor>("Author", authorSchema);
