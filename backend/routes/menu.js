const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Menu} = require('../models/menu');
const {Item} = require('../models/item');
const {Counter} = require('../models/counter');

router.post('/', async (req, res) => {

  let itemArrLength=req.body.item.length;

  for(let i=0;i<itemArrLength;i++){
  let item=await Item.findOne({_id:req.body.item[i]});
  if(!item) return res.status(400).send('Invalid Item'); 
  }
  
  let counter=await Counter.findOneAndUpdate({ "name" : "Menu" },{ $inc: { "value" : 1 } });
   let menutoCreate = new Menu({ 
    _id:counter.value+1,
    name: req.body.name,
    price: req.body.price,
    item:
        req.body.item
    
  })
  
    menutoCreate = await menutoCreate.save();

  res.send(menutoCreate);

});

router.get('/', async (req, res) => {
    const menu = await Menu.find().populate({path:'item',populate:{path:'categoryId'}});
   
    res.send(menu);
  });

  router.put('/:id',async (req, res) => {
    const menu = await Menu.findByIdAndUpdate(req.params.id,
      { 
        name: req.body.menuName,
        price:req.body.menuPrice,
        item:  req.body.item
      }, { new: true });
  
    res.send(menu);
    });


module.exports = router;  
