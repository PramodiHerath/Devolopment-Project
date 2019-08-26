const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Rating} = require('../models/rating');

router.post('/', async (req, res) => {
 
   let ratingtoCreate = new Rating({ 
     
    name: req.body.name,
    feedback: req.body.feedback,
  
  })
  
  ratingtoCreate = await ratingtoCreate.save();

  res.send(ratingtoCreate); 
 
});

module.exports = router;  
