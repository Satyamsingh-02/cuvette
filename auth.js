// // const express = require("express");
// // const { signUp } = require("../controllers/authController");
// // const router = express.Router();

// // // @route   POST /api/auth/signup
// // // @desc    Register a new user
// // router.post("/signup", signUp);

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");

// // Route to handle OTP email sending
// router.post("/send-otp", async (req, res) => {
//   const { email } = req.body; // The email should be sent from the frontend in the request body

//   if (!email) {
//     return res.status(400).json({ msg: "Email is required!" });
//   }

//   try {
//     // Nodemailer transporter setup (Hardcoded credentials)
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "youremail@gmail.com", // Replace with your Gmail
//         pass: "yourapppassword", // Replace with your Gmail App Password
//       },
//     });

//     // Email options
//     let mailOptions = {
//       from: "youremail@gmail.com", // Replace with your Gmail
//       to: email, // sending OTP to the email provided from the frontend
//       subject: "Your OTP Code",
//       text: "Your OTP code is: 123456", // You can generate a real OTP here
//       html: "<p>Your OTP code is: <b>123456</b></p>", // Replace 123456 with generated OTP
//     };

//     // Send the email
//     let info = await transporter.sendMail(mailOptions);

//     return res.status(200).json({ msg: "OTP sent successfully!", info });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({ msg: "Failed to send OTP!", error });
//   }
// });

// module.exports = router;

const express = require("express");
const { signUp } = require("../controllers/authController");
const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
router.post("/signup", signUp);

module.exports = router;
