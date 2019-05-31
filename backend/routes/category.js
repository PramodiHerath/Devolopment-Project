const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Category} = require('../models/category');

router.post('/', async (req, res) => {

   let categorytoCreate = new Category({ 
    _id: req.body.categoryId,
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

module.exports = router;  
