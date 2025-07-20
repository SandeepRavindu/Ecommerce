import multer from "multer";

// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/'); 
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

// Initialize upload middleware
const upload = multer({ storage });

export default upload;

