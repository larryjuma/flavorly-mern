const Dish = require('../models/Dish');

const getMenu = async (req, res) => {
  try {
    const items = await Dish.find({});
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const addMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const newItem = await Dish.create({
      name,
      description,
      price,
      category,
      image,
    });

    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add dish', error: err.message });
  }
};

module.exports = { getMenu, addMenuItem };
