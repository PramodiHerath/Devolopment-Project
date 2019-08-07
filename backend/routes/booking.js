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
    date:new Date(req.body.date),
    time:req.body.time,
    eventType:req.body.eventType,
    capacity:req.body.capacity,
    menu:req.body.menu,
    hallId:req.body.hall,
    clientId:req.body.clientId,
    serviceId:req.body.services,
    paymentId:req.body.paymentId
  })
  
   bookingtoCreate= await bookingtoCreate.save();

  res.send(bookingtoCreate);

});
router.get('/', async (req, res) => {
  const booking = await Booking.find().populate('serviceId').populate('menu.item');
  res.send(booking);
});

router.get('/checkAvailability', async (req, res) => {
  let dateQuery=req.query.date;
  let monthQuery=req.query.month;
  let yearQuery=req.query.year;
  let hallIdQuery=req.query.hallId;
  const booking = await Booking.aggregate([
    {$match:{hallId:parseInt(hallIdQuery)}},
    {
      $project:{
        time:1,
        date:1,
        clientId:1,
        day:{$dayOfMonth:'$date'},
        month:{$month:'$date'},
        year:{$year:'$date'},
        hallId:1,
    }
    },
    {$match:{day:parseInt(dateQuery)}},
    {$match:{month:parseInt(monthQuery)}},
    {$match:{year:parseInt(yearQuery)}},
  ])
  res.send(booking);
});
module.exports = router;  