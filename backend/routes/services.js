const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Service} = require('../models/service');

const {Counter} = require('../models/counter');

router.post('/', async (req, res) => {
  let counter=await Counter.findOneAndUpdate({ "name" : "Service" },{ $inc: { "value" : 1 } });

   let servicetoCreate = new Service({ 
     _id: counter.value+1,
    name: req.body.serviceName,
    price: req.body.servicePrice,
    amount: req.body.amount
  })
  
  servicetoCreate = await servicetoCreate.save();

  res.send(servicetoCreate); 
 
});

router.get('/', async (req, res) => {
    const service = await Service.find();
    res.send(service);
  });

  

router.put('/:id',async (req, res) => {
    const service = await Service.findByIdAndUpdate(req.params.id,
      { 
        name: req.body.newName,
        price: req.body.newPrice,
        amount: req.body.newAmount
      }, { new: true });
      if (!service) return res.status(404).send('The service with the given name was not found.');
    res.send(service);
    
  });

router.delete('/:id',async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).send('The service with the given name was not found.');
    res.send(service);
  
  });


module.exports = router;  
