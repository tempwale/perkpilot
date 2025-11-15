import mongoose from "mongoose";
// { Schema, Model, Document } 

const FeatureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
});

const PricingSchema = new mongoose.Schema({
  plan: { type: String, required: true },
  amount: { type: String, required: true },
  note: { type: String },
});

const AlternativeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  avatarUrl: { type: String },
  price: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  reviewCount: { type: Number },
  compareNote: { type: String },
});

const RatingCategorySchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., "Ease of Use"
  value: { type: Number, required: true },
  outOf: { type: Number, default: 5 },
});

const UseCaseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  rating: { type: Number },
});

const FAQSchema = new mongoose.Schema({
  question: { type: String },
  answer: { type: String },
});

// Individual user review nested within a product review
const UserReviewSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userTitle: { type: String },
  userAvatar: { type: String },
  date: { type: String },
  verified: { type: Boolean, default: false },
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewText: { type: String, required: true },
  helpful: { type: Number, default: 0 },
  notHelpful: { type: Number, default: 0 },
});

const ReviewSchema = new mongoose.Schema(
  {
    // Reviewer's details (for backward compatibility - main reviewer)
    userName: { type: String },
    userTitle: { type: String },
    userAvatar: { type: String },
    date: { type: String },
    verified: { type: Boolean, default: false },

    // Review data (for backward compatibility - main review)
    reviewText: { type: String },
    rating: { type: Number, min: 1, max: 5 },
    helpful: { type: Number, default: 0 },
    notHelpful: { type: Number, default: 0 },

    // Product-specific review context
    productName: { type: String, required: true },
    productType: { type: String },
    avatarUrl: { type: String },
    description: { type: String },
    overview: { type: String },

    features: [FeatureSchema],
    pricing: [PricingSchema],
    alternatives: [AlternativeSchema],
    userCount: { type: String },
    foundedYear: { type: Number },
    employeeRange: { type: String },
    headquarters: { type: String },
    lastUpdated: { type: String },
    upvotes: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },

    // Ratings breakdown and review stats
    aggregateRating: { type: Number },
    ratingCount: { type: Number },
    ratingCategories: [RatingCategorySchema],

    // Pros and cons
    pros: [{ type: String }],
    cons: [{ type: String }],

    faqs: [FAQSchema],
    useCases: [UseCaseSchema],
    integrations: [String],

    // Product reviews collection - individual user reviews for this product
    productReviews: [UserReviewSchema],

    // Rating breakdown statistics
    ratingBreakdown: {
      fiveStars: { type: Number, default: 0 },
      fourStars: { type: Number, default: 0 },
      threeStars: { type: Number, default: 0 },
      twoStars: { type: Number, default: 0 },
      oneStars: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
