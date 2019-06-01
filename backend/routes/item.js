const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Category} = require('../models/category')
const {Item} = require('../models/item');

router.post('/', async (req, res) => {

    const category= await Category.findById(req.body.categoryName);
  if (!category) return res.status(400).send('Invalid Item.');

   let itemtoCreate = new Item({ 
    _id: req.body.itemName,
    name: req.body.itemName,
    categoryId:req.body.categoryName
    
  })
  
    itemtoCreate = await itemtoCreate.save();

  res.send(itemtoCreate);

});

router.get('/', async (req, res) => {
  const item = await Item.find().populate('categoryId');
  res.send(item);
});

// router.get('/', async (req, res) => {
//     const item = await Item.find();
//     res.send(item);
//   });

  router.put('/:id',async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id,
      { 
        name: req.body.itemName,
        categoryId:req.body.categoryId
      }, { new: true });
  
    res.send(item);
    });

module.exports = router;  
