import express from "express";
import {
  getHomePage,
  updateHomePage,
  updateHomePageSection,
  resetHomePage,
} from "../controllers/homepage.controller.js";

const router = express.Router();

router.get("/", getHomePage);

router.put("/", updateHomePage);

router.patch("/:section", updateHomePageSection);

router.delete("/", resetHomePage);

export default router;
