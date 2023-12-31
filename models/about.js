const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
