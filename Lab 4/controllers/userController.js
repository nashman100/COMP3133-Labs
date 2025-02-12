const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    try{
        const{name, username, email, address, geo, phone, website, company} = req.body;

        const user = new User({
            name,
            username,
            email,
            address,
            geo,
            phone,
            website,
            company
        });

        await user.save();
        res.status(201).json({message: 'User created successfully!'})
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error creating user.'});
    }
});

module.exports = router;