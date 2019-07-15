const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const {Menu} = require('../models/menu');
const {Item} = require('../models/item');
const {Counter} = require('../models/counter');
const {Category} = require('../models/category');

router.post('/', async (req, res) => {

  let itemArrLength=req.body.item.length;
  let choiceArrLength=req.body.choice.length;
  let choice=[];

  for(let i=0;i<itemArrLength;i++){
  let item=await Item.findOne({_id:req.body.item[i]});
  if(!item) return res.status(400).send('Invalid Item'); 
  }
  for(let i=0;i<choiceArrLength;i++){
    let category=await Category.findOne({name:req.body.choice[i].category});
    console.log(req.body.choice[i]);
    if(!category) return res.status(400).send('Invalid category')
  
    else {
      let x={
        categoryId:category._id,
        categoryName:category.name,
        noOfChoice:req.body.choice[i].noOfChoice
    };
    choice.push(x)
    
    }
  }
  let counter=await Counter.findOneAndUpdate({ "name" : "Menu" },{ $inc: { "value" : 1 } });
   let menutoCreate = new Menu({ 
    _id:counter.value+1,
    name: req.body.name,
    price: req.body.price,
    item:req.body.item,
    choice:choice
    
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
