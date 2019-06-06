const mongoose = require('mongoose');
const {clientSchema}= require('./client');
const {serviceSchema}= require('./service');
const {hallSchema}= require('./hall');
const {Payment}= require('./payment');

const bookingSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true,
    },
    status: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    date: {
        type: Date,
        required: true,
    },
    time:{
        type: String,
        required: true,

    },
    eventType:{
        type: String,
        required: true,

    },
    capacity:{
        type: Number,
        required: true,

    },
    hallId:{
        type: hallSchema,
        required: true
    },
    client:{
        type: new mongoose.Schema({
            _id:{
                type:String,
                required: true
            },
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
              },
            emailAddress:{
                type: String,
                required: true,
        
            },



        })
    },
    serviceId:[
        {
            type: serviceSchema,
            required: true
        }
    ],
    paymentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Payment
    }
  });
  
  const Booking = mongoose.model('Booking', bookingSchema);

exports.Booking = Booking; 

exports.bookingSchema = bookingSchema;