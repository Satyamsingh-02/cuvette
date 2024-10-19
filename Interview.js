const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  experienceLevel: {
    type: String,
    required: true,
  },
  candidateEmail: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;
