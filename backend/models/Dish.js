const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model('Dish', dishSchema);
