const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Menu} = require('../models/menu');
const {Item} = require('../models/item');

router.post('/', async (req, res) => {

  const item= await Item.findOne({name:req.body.categoryName});
  if (!category) return res.status(400).send('Invalid Item.');
  let counter=await Counter.findOneAndUpdate({ "name" : "Menu" },{ $inc: { "value" : 1 } });
   let menutoCreate = new Menu({ 
    _id:counter.value+1,
    name: req.body.menuName,
    price: req.body.menuPrice,
    item:
        req.body.menuItems
    
  })
  
    menutoCreate = await menutoCreate.save();

  res.send(menutoCreate);

});

router.get('/', async (req, res) => {
    const menu = await Menu.find();
    res.send(menu);
  });

module.exports = router;  
