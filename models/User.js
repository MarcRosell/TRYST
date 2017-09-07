const mongoose = require('mongoose');
const passportlocalmongoose = require('passport-local-mongoose')
const collection = 'users'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  image: String,
  email: String,
  password: String
}, { collection })

const options = {
  usernameField: 'email'
}

UserSchema.plugin(passportlocalmongoose, (options))
module.exports = mongoose.model('User', UserSchema);