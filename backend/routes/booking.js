const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Booking} = require('../models/booking');
const {Counter} = require('../models/counter');

router.post('/', async (req, res) => {


  let counter=await Counter.findOneAndUpdate({ "name" : "Booking" },{ $inc: { "value" : 1 } });

   let bookingtoCreate = new Booking({ 
    _id: counter.value+1,
    status: req.body.status,
    date:req.body.date,
    time:req.body.time,
    eventType:req.body.eventType,
    capacity:req.body.capacity,
    menu:req.body.menu,
    hallId:req.body.hall,
    clientId:req.body.client,
    serviceId:req.body.services,
    paymentId:req.body.payment
  })
  
   bookingtoCreate= await bookingtoCreate.save();

  res.send(bookingtoCreate);

});

module.exports = router;  