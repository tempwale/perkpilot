import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import dealsRoutes from "./routes/deals.routes";
import comparisionRouter from "./routes/comparision.routes";
import reviewsRoutes from "./routes/reviews.routes";
import authorRoutes from "./routes/author.routes";
// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// Routes
app.use("/api/deals", dealsRoutes);

app.use("/api/comparisons", comparisionRouter);

app.use("/api/reviews", reviewsRoutes);

app.use("/api/authors", authorRoutes);
// Health check / default route
app.get("/", (_req: Request, res: Response) => {
  console.log("API is running...");
  res.status(200).send("API is running...");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
