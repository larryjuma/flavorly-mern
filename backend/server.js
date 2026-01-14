require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// Serve static files (images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// connect to database
const connectDB = require('./config/db');
connectDB();

// import routes
const dishRoutes = require('./routes/dishRoute');
app.use('/api/menu', dishRoutes);

const reservationRoutes = require("./routes/reservationRoute");
app.use("/api/reservations", reservationRoutes);

const contactRoutes = require("./routes/contactRoute");
app.use("/api/contact", contactRoutes);

const newsletterRoute = require("./routes/newsletterRoute");
app.use("/api/newsletter", newsletterRoute);


// basic route
app.get('/', (req, res) => {
  res.send('Flavorly Backend is running...');
});


// start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
