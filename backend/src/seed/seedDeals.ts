import mongoose from "mongoose";
import Deal from "../models/deal.model"; // adjust path if needed

// Sample deals with logo URIs instead of React components
const sampleDeals = [
  {
    title: "Framer",
    category: "No-Code Tool",
    description:
      "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    logoUri: "/logos/framer.png",
    verified: true,
    tag: "Hot Deal",
    features: [
      "Unlimited Blocks",
      "Team Collaboration",
      "Advance Permissions",
      "Version History",
    ],
    discount: "25% OFF",
    savings: "Save Up To $1234",
  },
  {
    title: "Figma",
    category: "Design Tool",
    description:
      "Collaborative interface design tool for teams. Create, prototype, and gather feedback all in one place.",
    logoUri: "/logos/figma.png",
    verified: true,
    tag: "Limited Time",
    features: [
      "Unlimited Files",
      "Advanced Prototyping",
      "Team Libraries",
      "Version Control",
    ],
    discount: "50% OFF",
    savings: "Save Up To $2000",
  },
  {
    title: "Notion",
    category: "Productivity Tool",
    description:
      "All-in-one workspace for notes, tasks, wikis, and databases. Organize your work and life.",
    logoUri: "/logos/notion.png",
    verified: false,
    tag: "New Deal",
    features: [
      "Unlimited Pages",
      "Real-time Collaboration",
      "Advanced Permissions",
      "API Access",
    ],
    discount: "40% OFF",
    savings: "Save Up To $800",
  },
  // add the rest similarly...
];

async function seedDeals() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dealsdb"); // change URI if needed
    console.log("MongoDB connected");

    for (const deal of sampleDeals) {
      const discountPercentage = parseInt(
        deal.discount.replace("% OFF", ""),
        10
      );
      const savingsAmount = parseInt(
        deal.savings.replace("Save Up To $", ""),
        10
      );

      const newDeal = new Deal({
        title: deal.title,
        category: deal.category,
        description: deal.description,
        features: deal.features,
        discountPercentage,
        savingsAmount,
        tag: deal.tag,
        logoUri: deal.logoUri,
        verified: deal.verified,
      });

      await newDeal.save();
      console.log(`Inserted: ${deal.title}`);
    }

    console.log("All deals inserted!");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error inserting deals:", err);
  }
}

seedDeals();
