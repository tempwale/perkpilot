// cloudinary.ts

// Cloudinary configuration for server-side uploads (use process.env in Node)
export const CLOUDINARY_CLOUD_NAME = (process.env.VITE_CLOUDINARY_CLOUD_NAME ?? process.env.CLOUDINARY_CLOUD_NAME) as string;
export const CLOUDINARY_UPLOAD_PRESET = (process.env.VITE_CLOUDINARY_UPLOAD_PRESET ?? process.env.CLOUDINARY_UPLOAD_PRESET) as string;

/**
 * Upload image to Cloudinary
 * @param file - The file to upload
 * @returns Cloudinary URL of the uploaded image
 */
export async function uploadToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to upload image to Cloudinary');
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}
