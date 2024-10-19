const express = require("express");
const router = express.Router();
const interviewController = require("../controllers/interviewController");

// Route to create a new interview
router.post("/", interviewController.createInterview);

// Route to get all interviews (optional)
router.get("/", interviewController.getAllInterviews);

module.exports = router;
