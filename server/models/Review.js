// models/Review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  travelPlaceId: { type: mongoose.Schema.Types.ObjectId, ref: "TravelPlace", required: true },
  name: String,
  comment: String,
  rating: { type: Number, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);
