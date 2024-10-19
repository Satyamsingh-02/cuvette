const Interview = require("../models/Interview");

// Create a new interview
exports.createInterview = async (req, res) => {
  try {
    const interviewData = req.body;

    // Create a new interview document
    const interview = new Interview(interviewData);

    // Save the document to the database
    await interview.save();

    res
      .status(201)
      .json({ message: "Interview created successfully", interview });
  } catch (error) {
    res.status(500).json({ message: "Failed to create interview", error });
  }
};

// Get all interviews
exports.getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve interviews", error });
  }
};
