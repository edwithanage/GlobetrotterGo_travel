const express = require('express');
const router = express.Router();
const TravelPlace = require('../models/TravelPlace');

// Get all travel places
router.get('/', async (req, res) => {
  try {
    const places = await TravelPlace.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// GET one
router.get('/:id', async (req, res) => {
  try {
    const place = await Travel.findById(req.params.id);
    if (!place) return res.status(404).json({ error: 'Not found' });
    res.json(place);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching place' });
  }
});
// POST
router.post('/', async (req, res) => {
  try {
    const newPlace = new Travel(req.body);
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
