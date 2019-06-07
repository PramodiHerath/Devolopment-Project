const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Category} = require('../models/category');
const {Item} = require('../models/item');

router.post('/', async (req, res) => {

   let categorytoCreate = new Category({ 
     _id: req.body.categoryName,
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

  router.get('/:id', async (req, res) => {
    const items = await Item.find({categoryId:req.params.id});
    res.send(items);
  });

router.put('/:id',async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
      { 
        name: req.body.categoryName,
        price: req.body.categoryPrice,
        
      }, { new: true });
      if (!category) return res.status(404).send('The category with the given name was not found.');
    res.send(category);
  });

router.delete('/:id',async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).send('The category with the given name was not found.');
    res.send(category);
  
  });

module.exports = router;  
