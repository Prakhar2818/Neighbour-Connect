const express = require("express");
const cors = require("cors");

const authRoutes = require("./modules/auth/auth.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("Neighbour Connect Backend is running 🚀");
});

module.exports = app;
