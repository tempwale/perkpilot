import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import dealsRoutes from './routes/deals.routes.js';
import comparisionRouter from './routes/comparision.routes.js';
import reviewsRoutes from './routes/reviews.routes.js';
import authorRoutes from './routes/author.routes.js';
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

app.listen(process.env.PORT || 5001, () => {
  console.log(`Server is running on port ${process.env.PORT || 5001}`);
});
