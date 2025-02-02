const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

router.post('/', async (req, res) => {
    try{
        const{address, city, cuisine, name, restaurant_id} = req.body;

        const restaurant = new Restaurant({
            address,
            city,
            cuisine,
            name,
            restaurant_id
        });

        await restaurant.save();
        res.status(201).json({message: 'Restaurant created successfully!'})
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error creating resaturant'});
    }
})

router.get('/', async (req, res) => {
    try{
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error getting restaurants'});
    }
});

router.get('/cuisine/:cuisine', async (req,res) => {
    try{
        const {cuisine} = req.params;
        const restaurants = await Restaurant.find({cuisine: cuisine});

        if (restaurants.length === 0){
            return res.status(404).json({message: 'No restaurants found for cuisine: ${cuisine}'});
        }

        res.status(200).json(restaurants);
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error getting restaurants by cuisine'});
    }
});

router.get('/sorted', async (req, res) => {
    const sortOrder = req.query.sortBy === 'DESC' ? -1:1;

    try{
        const restaurants = await Restaurant.find({}, {_id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1})
            .sort({restaurant_id: sortOrder});
        
            res.status(200).json(restaurants);
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error retrieving restaurants'});
    }
});

router.get('/Delicatessen', async (req, res) => {
    try{
        const restaurants = await Restaurant.find({ cuisine: 'Delicatessen', city: {$ne: 'Brooklyn'}}, {_id: 0, cuisine: 1, name: 1, city: 1})
            .sort({name: 1});
        
        res.status(200).json(restaurants);
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error retrieving restaurants'});
    }
});

module.exports = router;