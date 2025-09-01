const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

// Register Donor
router.post("/", async (req, res) => {
  try {
    const { fullName, email, bloodGroup, password } = req.body;

    // Check if already exists
    const existing = await Donor.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newDonor = new Donor({ fullName, email, bloodGroup, password });
    await newDonor.save();
    res.status(201).json({ message: "Donor registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
