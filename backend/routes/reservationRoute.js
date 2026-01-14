const express = require("express");
const Reservation = require("../models/Reservation");

const router = express.Router();

// Create reservation
router.post("/", async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: "Reservation successful!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to book reservation" });
  }
});

module.exports = router;
