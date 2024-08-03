const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    requiredURL: {
      type: String,
      required: true,
    },

    visitHistory: [
      {
        totalClicks: {
          timestamp: { type: Number },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const URL = mongoose.model("url", urlSchema);

module.exports = {
  URL,
};
