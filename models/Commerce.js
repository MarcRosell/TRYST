const mongoose = require('mongoose');
const collection = 'commerce'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


var CommerceSchema = new mongoose.Schema(
{
    name: String,
    category: String,
    subcategory: String,
    location: String,
    description: String,
    services: [{
        id: String, // 'cortar-pelo'
        time: Number,
        price: Number
        }
    ],
    logo: String,
    img: String
}, { collection })


module.exports = mongoose.model('Commerce', CommerceSchema);