const mongoose = require('mongoose');
const collection = 'users'

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  image: String,
  email: String,
  password: String,
  about: String,
  appointments: [{ type: mongoose.Schema.ObjectId,
                    ref: "Comerce",
                    date: Date,
                    service: String,
                    duration: Number,
                }],
}, { collection })

module.exports = mongoose.model('User', UserSchema);