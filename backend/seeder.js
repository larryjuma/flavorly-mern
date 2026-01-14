const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Dish = require("./models/Dish");
const dishData = require("./data/dishData");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error(err));

const seedDishes = async () => {
  try {
    await Dish.deleteMany();

    const result = await Dish.insertMany(dishData, { ordered: false });

    console.log(`${result.length} dishes inserted successfully!`);
    process.exit();
  } catch (err) {
    console.error("Insert error:", err.message);
    process.exit(1);
  }
};

seedDishes();
