
const express = require('express');
const router = express.Router();
const {Tax} = require('../models/tax');
 

router.post('/', async (req, res) => {
   
  
     let taxtoCreate = new Tax({ 
      taxRate: req.body.newRate,
    })
    
    taxtoCreate = await taxtoCreate.save();
  
    res.send(taxtoCreate); 
   
  });


  router.get('/', async (req, res) => {
    const tax = await Tax.find();
    res.send(tax);
  });

  router.put('/:id',async (req, res) => {
      console.log(req.body.newRate)
    const tax = await Tax.findByIdAndUpdate(req.params.id,
      { 
        taxRate: req.body.newRate
      }, { new: true });
  
    res.send(tax);
    });
  
  module.exports = router; 




