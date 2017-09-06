const mongoose = require('mongoose');
const collection = 'appointments'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


var AppointmentSchema = new mongoose.Schema(
{
    user: { type: ObjectId, ref: 'User' },
    commerce: { type: ObjectId, ref: 'Commerce' },
    date: Number,
    service: String 
}, { collection })


module.exports = mongoose.model('Appointment', AppointmentSchema);