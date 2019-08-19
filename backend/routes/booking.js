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
    clientId:req.body.clientId,
    serviceId:req.body.services,
    paymentId:req.body.paymentId,
    bookingCharge:req.body.totalBookingCharge,
    damageCharge:req.body.damageCharge,
    durationCharge:req.body.durationCharge,
    keyMoney:req.body.keyMoney,
    totalCharge:req.body.totalCharge
  })
  
   bookingtoCreate= await bookingtoCreate.save();

  res.send(bookingtoCreate);

});
router.get('/', async (req, res) => {
  const booking = await Booking.find().populate('serviceId');
  res.send(booking);
});


router.get('/checkAvailability/all', async (req, res) => {
  let dateQuery=req.query.date;
  let monthQuery=req.query.month;
  let yearQuery=req.query.year;
  let hallIdQuery=req.query.hallId;
  let bookingDetailstoSend=[]
  const bookings = await Booking.find({hallId:hallIdQuery})

  
  bookings.forEach(booking=>{

    if(new Date(booking.date).getMonth()==parseInt(monthQuery)){
        if(new Date(booking.date).getFullYear()==parseInt(yearQuery)){
          if(new Date(booking.date).getDate()==parseInt(dateQuery)){
            console.log(new Date(booking.date).getMonth())
            bookingDetailstoSend.push(booking);
          }
          
        }  
    }
})
  res.send(bookingDetailstoSend);
});

router.get('/:id', async (req, res) => {
  const booking = await Booking.findById({_id:req.params.id}).populate('clientId').populate('paymentId');
  
  if (!booking) return res.status(404).send('The booking with the given id was not found.');
  res.send(booking);
});

router.get('/tentative/all', async (req, res) => {
  const booking = await Booking.find({status:'tentative'}).populate('clientId').populate('hallId');
  res.send(booking);
});2

router.get('/getClientBookings/all', async (req, res) => {

  let clientIdQuery=req.query.clientId;
  console.log(clientIdQuery)
  const bookings = await Booking.find({clientId:clientIdQuery})
  res.send(bookings);
});

router.put('/:id',async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id,
    { 
    status: req.body.status,
    eventType:req.body.eventType,
    capacity:req.body.capacity,
    menu:req.body.menu,
    serviceId:req.body.services,
    paymentId:req.body.paymentId,
    bookingCharge:req.body.totalBookingCharge,
    damageCharge:req.body.damageCharge,
    damageCharge:req.body.durationCharge,
    keyMoney:req.body.keyMoney,
    totalCharge:req.body.totalCharge
      
      
    }, { new: true });
    if (!booking) return res.status(404).send('The booking with the given name was not found.');
  res.send(booking);
});

router.put('/updateConfirmedBooking/all/:id',async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id,
    { 
    paymentId:req.body.paymentId,

    }, { new: true });
    if (!booking) return res.status(404).send('The booking with the given name was not found.');
  res.send(booking);
});

router.put('/closeConfirmedBooking/all/:id',async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id,
    {
    status:req.body.status,
    paymentId:req.body.paymentId,
    damageCharge: req.body.damageCharges,
    durationCharge:req.body.durationCharge,
    totalCharge:req.body.totalCharge

    }, { new: true });
    if (!booking) return res.status(404).send('The booking with the given name was not found.');
  res.send(booking);
});


router.delete('/:id',async (req, res) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).send('The booking with the given name was not found.');
    res.send(booking);
  
  });
module.exports = router;  

// const items = await Item.find({categoryId:req.params.id}).populate('categoryId');