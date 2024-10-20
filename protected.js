const express = require("express");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ msg: "This is a protected route!" });
});

module.exports = router;
