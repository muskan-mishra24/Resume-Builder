const express = require("express");
const router = express.Router();
const { createResume, getUserResumes } = require("../controllers/resumeController");
const { protect } = require("../middleware/authMiddleware"); // Check this line!

// If 'protect' or 'createResume' is undefined here, the app crashes
router.post("/", protect, createResume); 
router.get("/", protect, getUserResumes);

module.exports = router;