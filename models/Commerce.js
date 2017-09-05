const mongoose = require('mongoose');
const collection = 'commerce'

var CommerceSchema = new mongoose.Schema(
{
    name: String,
    category: String,
    subcategory: String,
    location: String,
    description: String,
    services: [{
        service: String,
        time: Number,
        price: Number
        },
        {
        service: String,
        time: Number,
        price: Number
        }
    ],
    appoinments: [{
        user: String,
        date: String,
        service: String
    }],
    logo: String,
    img: String
}, { collection })


module.exports = mongoose.model('Commerce', CommerceSchema);