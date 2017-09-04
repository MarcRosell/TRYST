const mongoose = require('mongoose');
const collection = 'comerces'

var ComerceSchema = new mongoose.Schema({

  location: String,
  category: String,
  subcategory: String,
  name: Date,
  services: [{
  	service: String,
  	duration: Number,
  }],
  free: Boolean,
}, { collection })

module.exports = mongoose.model('Comerce', ComerceSchema);