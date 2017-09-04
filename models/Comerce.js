const mongoose = require('mongoose');
const collection = 'commerce'

var ComerceSchema = new mongoose.Schema(
// {
//   location: String,
//   category: String,
//   subcategory: String,
//   name: Date,
//   services: [{
//   	service: String,
//   	duration: Number,
//   }],
//   free: Boolean,
// }, { collection })

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
    logo: String,
    img: String
}, { collection })


module.exports = mongoose.model('Comerce', ComerceSchema);