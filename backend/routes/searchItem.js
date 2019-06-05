const {Item} = require('../models/item');
const express = require('express');
const router = express.Router();

  
router.get('/', async (req, res) => {
  var itemNameQuery=req.query.itemName;
  
  // pattern= new RegExp(policeStationNameQuery, "i");
  pattern= new RegExp(itemQuery, "i");
  const item= await Item.find({itemName:pattern})
  .populate('categoryId')
  res.send(item);
});

  
module.exports = router; 