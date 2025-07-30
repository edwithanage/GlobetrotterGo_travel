// routes/reviews.js
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// Get all reviews for a travel place
router.get("/:travelPlaceId", async (req, res) => {
  try {
    const reviews = await Review.find({ travelPlaceId: req.params.travelPlaceId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// Post a new review
router.post("/", async (req, res) => {
  const { travelPlaceId, name, comment, rating } = req.body;

  try {
    const newReview = new Review({ travelPlaceId, name, comment, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ error: "Failed to submit review" });
  }
});

module.exports = router;
