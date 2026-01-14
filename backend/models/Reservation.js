const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  guests: Number,
  date: String,
  time: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);
