const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    address: {
        building:{
            type: String,
            required: true
        },
        street:{
            type: String,
            required: true
        },
        zipcode:{
            type: String,
            required: true
        }
    },
    city:{
        type: String,
        required: true
    },
    cuisine:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    restaurant_id:{
        type: Number,
        required: true,
        unique: true
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;