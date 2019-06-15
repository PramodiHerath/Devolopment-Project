const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Category} = require('../models/category');
const {Item} = require('../models/item');
const {Counter} = require('../models/counter');

router.post('/', async (req, res) => {
  let counter=await Counter.findOneAndUpdate({ "name" : "Category" },{ $inc: { "value" : 1 } });

   let categorytoCreate = new Category({ 
     _id: counter.value+1,
    name: req.body.categoryName,
    price: req.body.categoryPrice,
    choiceOf:req.body.choiceOf
  })
  
  categorytoCreate = await categorytoCreate.save();

  res.send(categorytoCreate); 
 
});

router.get('/', async (req, res) => {
    const category = await Category.find();
    res.send(category);
  });

  router.get('/:id', async (req, res) => {
    const category = await Category.find({_id:req.params.id});
    res.send(category);
    
  });

router.put('/:id',async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
      { 
        name: req.body.newName,
        price: req.body.newPrice,
        choiceOf: req.body.newChoice
        
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
