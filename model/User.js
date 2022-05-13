const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 10,
    max: 255,
  },
  emailAddress: {
    type: String,
    required: true,
    min: 10,
    max: 255,
  },
  address: {
    type: String,
    required: true,
    min: 10,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 50,
  },
});

module.exports = mongoose.model("User", userSchema);
