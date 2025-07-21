const express = require('express');
const router = express.Router();
const TravelPlace = require('../models/TravelPlace'); // ✅ correct model

// Get all travel places
router.get('/', async (req, res) => {
  try {
    const places = await TravelPlace.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single travel place by ID
router.get('/:id', async (req, res) => {
  try {
    const place = await TravelPlace.findById(req.params.id); // ✅ use correct model
    if (!place) return res.status(404).json({ error: 'Not found' });
    res.json(place);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching place' });
  }
});

// Add a new travel place
router.post('/', async (req, res) => {
  try {
    const newPlace = new TravelPlace(req.body); // ✅ use correct model
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
