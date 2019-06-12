const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Category} = require('../models/category')
const {Item} = require('../models/item');
const {Counter} = require('../models/counter');

router.post('/', async (req, res) => {

    const category= await Category.findOne({name:req.body.categoryName});
  if (!category) return res.status(400).send('Invalid category.');

  let counter=await Counter.findOneAndUpdate({ "name" : "Item" },{ $inc: { "value" : 1 } });

   let itemtoCreate = new Item({ 
    _id: counter.value+1,
    name: req.body.itemName,
    categoryId:category._id
  })
  
    itemtoCreate = await itemtoCreate.save();

  res.send(itemtoCreate);

});

router.get('/', async (req, res) => {
  const item = await Item.find().populate('categoryId');
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


    router.delete('/:id',async (req, res) => {
      const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).send('The Item with the given name was not found.');
        res.send(item);
      
      });
      

module.exports = router;  
