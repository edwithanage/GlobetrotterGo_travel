const mongoose = require('mongoose');

const travelPlaceSchema = new mongoose.Schema({
  name: String,
  description: String,
  views: Number,
  distance: Number,
  date: String,
  image: String
});

module.exports = mongoose.model('TravelPlace', travelPlaceSchema);
