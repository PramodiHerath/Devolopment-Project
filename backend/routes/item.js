const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Item} = require('../models/item');

router.post('/', async (req, res) => {

    const item = await Item.findById(req.body.categoryId);
  if (!item) return res.status(400).send('Invalid Item.');

   let itemtoCreate = new Item({ 
    _id: req.body.itemName,
    name: req.body.itemName,
    categoryId:req.body.categoryName
    
  })
  
    itemtoCreate = await itemtoCreate.save();

  res.send(itemtoCreate);

});

router.get('/', async (req, res) => {
    const item = await Item.find();
    res.send(item);
  });

  router.put('/:id',async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id,
      { 
        name: req.body.itemName,
        categoryId:req.body.categoryId
      }, { new: true });
  
    res.send(item);
    });

module.exports = router;  
