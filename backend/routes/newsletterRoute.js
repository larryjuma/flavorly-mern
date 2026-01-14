// routes/newsletter.js
const express = require("express");
const router = express.Router();
const Newsletter = require("../models/Newsletter");

// POST /api/newsletter
router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    // Check if email already exists
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed." });
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    return res.status(201).json({ message: "Successfully subscribed!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error. Try again later." });
  }
});

module.exports = router;
