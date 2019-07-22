const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Payment} = require('../models/payment');

const {Counter} = require('../models/counter');

router.post('/', async (req, res) => {
  let counter=await Counter.findOneAndUpdate({ "name" : "Payment" },{ $inc: { "value" : 1 } });

   let payemnttoCreate = new Payment({ 
    _id: counter.value+1,
    type: req.body.paymentType,
    amount: req.body.amount,
    date: req.body.date,
    clientId: req.body.clientId
  })
  
  payemnttoCreate= await payemnttoCreate.save();

  res.send(payemnttoCreate); 
 
});

router.get('/', async (req, res) => {
    const payment = await Payment.find();
    res.send(payment);
  });
module.exports = router;  