const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Category} = require('../models/menu');

router.post('/', async (req, res) => {

   let menutoCreate = new Menu({ 
    _id: req.body.menuId,
    name: req.body.menuName,
    price: req.body.menuPrice,
    item:[
        req.body.menuItems
    ]
  })
  
    menutoCreate = await menutoCreate.save();

  res.send(menutoCreate);

});

router.get('/', async (req, res) => {
    const menu = await Menu.find();
    res.send(menu);
  });

module.exports = router;  
