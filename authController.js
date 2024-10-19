const User = require("../models/User"); // Assuming User model is correctly imported

const signUp = async (req, res) => {
  try {
    const { name, phone, companyName, companyEmail, employeeSize } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ companyEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Create new user
    const newUser = new User({
      name,
      phone,
      companyName,
      companyEmail,
      employeeSize,
    });

    await newUser.save();

    // Send success response
    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ message: "Server error during sign-up." });
  }
};

module.exports = { signUp };
