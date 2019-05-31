const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Category} = require('../models/category');

router.post('/', async (req, res) => {

   let categorytoCreate = new Category({ 
    name: req.body.categoryName,
    price: req.body.categoryPrice
  })
  
  categorytoCreate = await categorytoCreate.save();

  res.send(categorytoCreate); 
 
});

router.get('/', async (req, res) => {
    const category = await Category.find();
    res.send(category);
  });

  router.put('/:id',async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
      { 
        name: req.body.categoryName,
        price: req.body.categoryPrice,
        
      }, { new: true });
  
    res.send(category);
    });

module.exports = router;  
