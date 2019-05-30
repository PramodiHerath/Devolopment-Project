const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Category} = require('../models/category');

router.post('/', async (req, res) => {

   let categoryToCreate = new Category({ 
    _id: req.body.categoryId,
    name: req.body.categoryName,
    price: req.body.categoryPrice
  })

  categoryToCreate = await categorytoCreate.save();

  res.send(categoryToCreate);
});

module.exports = router;  
