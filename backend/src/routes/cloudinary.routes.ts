import express, { Request, Response } from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const app = express();
const upload = multer({ dest: "uploads/" }); // temp local storage

// Optional: configure Cloudinary from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Extending Express Request to include multer file type
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

app.post(
  "/upload",
  upload.single("image"),
  async (req: MulterRequest, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "ts_cloudinary_demo", // optional folder
      });

      return res.json({
        message: "Upload successful",
        imageUrl: result.secure_url,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Upload failed" });
    }
  }
);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
