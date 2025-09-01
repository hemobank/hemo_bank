const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Donor = mongoose.model("Donor", donorSchema);
module.exports = Donor;
