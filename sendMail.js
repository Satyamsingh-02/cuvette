// const nodemailer = require("nodemailer");

// const sendMail = async (req, res) => {
//   const { companyEmail } = req.body; // Get the email from the frontend request

//   // Ensure an email address is provided
//   if (!companyEmail) {
//     return res.status(400).json({ msg: "Email is required" });
//   }

//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "dorian21@ethereal.email",
//       pass: "fGjZKazd9HuDaBt1xs",
//     },
//   });

//   // Generate a random OTP (can use any OTP generation logic)
//   const otp = Math.floor(100000 + Math.random() * 900000);

//   let info = await transporter.sendMail({
//     from: "Sender Name <im8294satyam@gmail.com>",
//     to: companyEmail, // Use the email received from the frontend
//     subject: "Your OTP Code ✔",
//     text: `Your OTP code is: ${otp}`,
//     html: `<p><b>Your OTP code is:</b> ${otp}</p>`,
//   });

//   res.status(200).json({ msg: "OTP sent successfully!", otp });
// };

// module.exports = sendMail;

var nodemailer = require("nodemailer");

// Using App Password
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "YOUR_APP_PASSWORD", // App password generated from Gmail
  },
});

var mailOptions = {
  from: "youremail@gmail.com",
  to: "myfriend@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
