const mongoose = require('mongoose');
const {Client}= require('./client');
const {Service}= require('./service');
const {Hall}= require('./hall');
const {Payment}= require('./payment');
const {Item}= require('./item');

const bookingSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true,
    },
    status: {
      type: String,
      required: true,
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
    menu:{
        type: new mongoose.Schema({
            _id:{
                type:Number

            },
            name:{
                type:String
               
            },  
            price:{
                type:Number
               
            },
            item:[{
                type: Number,
                ref: Item
            }]
        }),
       

    },
    hallId:{
        type: Number,
        ref: Hall
    },
    remarks:{
        type:String
    },
    clientId:{
        type: String,
        ref: Client
    },
    serviceId:[{
        type: new mongoose.Schema({
        _id:{
            type:Number

        },
        name:{
            type:String
           
        },  
        price:{
            type:Number
           
        },
        quantity:{
            type: Number,
        }
    }),
    }
    ],
    paymentId:[{
        type: Number,
        ref: Payment
      
    }]
  });
  
  const Booking = mongoose.model('Booking', bookingSchema);

exports.Booking = Booking; 

exports.bookingSchema = bookingSchema;