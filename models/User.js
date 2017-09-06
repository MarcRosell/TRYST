const mongoose = require('mongoose');
const collection = 'users'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  image: String,
  email: String,
  password: String,
  appointments: [{ 
     type: ObjectId, ref: 'Appointment' 
  }]
}, { collection })

module.exports = mongoose.model('User', UserSchema);