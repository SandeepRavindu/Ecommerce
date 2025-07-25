import multer from "multer";

// Use memory storage instead of disk storage since we're uploading to Cloudinary
const storage = multer.memoryStorage();

// Initialize upload middleware
const upload = multer({ storage });

export default upload;

