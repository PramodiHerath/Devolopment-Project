
const express = require('express');
const router = express.Router();
const {HallCharge} = require('../models/hallCharge');
 

router.post('/', async (req, res) => {
   
  
     let hallChargetoCreate = new HallCharge({ 
      hallCharge: req.body.newHallCharge,
    })
    
    hallChargetoCreate = await hallChargetoCreate.save();
  
    res.send(hallChargetoCreate); 
   
  });


  router.get('/', async (req, res) => {
    const hallCharge = await HallCharge.find();
    res.send(hallCharge);
  });

  router.put('/:id',async (req, res) => {
      console.log(req.body.newHallCharge)
    const hallCharge = await HallCharge.findByIdAndUpdate(req.params.id,
      { 
        hallCharge: req.body.newHallCharge
      }, { new: true });
  
    res.send(hallCharge);
    });
  
  module.exports = router; 




