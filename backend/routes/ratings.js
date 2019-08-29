const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Rating} = require('../models/rating');

router.post('/', async (req, res) => {
  const rating= await Rating.findOne({name:req.body.name});
  if (rating) return res.status(400).send('You have already rated.');

   let ratingtoCreate = new Rating({ 
     
    name: req.body.name,
    feedback: req.body.feedback,
  
  })
  
  ratingtoCreate = await ratingtoCreate.save();

  res.send(ratingtoCreate); 
 
});

module.exports = router;  
