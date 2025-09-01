const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const donorRoutes = require("./routes/donorRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // to read JSON data from requests

connectDB(); // Connect to MongoDB Atlas

// Routes
app.use("/api/donors", donorRoutes); // All donor-related APIs

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
