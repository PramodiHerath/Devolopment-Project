const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Halls} = require('../models/hall');

const {Counter} = require('../models/counter');

router.post('/', async (req, res) => {
    let counter=await Counter.findOneAndUpdate({ "name" : "Hall" },{ $inc: { "value" : 1 } });
  
     let halltoCreate = new Hall({ 
       _id: counter.value+1,
      name: req.body.name,
      capacity: req.body.capacity
    })
    
    halltoCreate = await halltoCreate.save();
  
    res.send(halltoCreate); 
   
  });
  
  router.get('/', async (req, res) => {
      const hall = await Halls.find();
      res.send(hall);
    });
  
    
  
//   router.put('/:id',async (req, res) => {
//       const service = await Service.findByIdAndUpdate(req.params.id,
//         { 
//           name: req.body.newName,
//           price: req.body.newPrice,
//           amount: req.body.newAmount
//         }, { new: true });
//         if (!service) return res.status(404).send('The service with the given name was not found.');
//       res.send(service);
      
//     });
  
//   router.delete('/:id',async (req, res) => {
//     const service = await Service.findByIdAndDelete(req.params.id);
//       if (!service) return res.status(404).send('The service with the given name was not found.');
//       res.send(service);
    
//     });
  
  
  module.exports = router;  