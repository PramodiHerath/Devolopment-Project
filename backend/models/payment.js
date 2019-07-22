const mongoose = require('mongoose');
const {Client}= require('./client')

const paymentSchema = new mongoose.Schema({
    
    _id:{
        type: Number,
        required: true,
    },
    type: {
      type: String,
      required: true,
    },
    amount:{
      type: Number,
      required: true,

    },
    date:{
      type: Date,
      required: true,
    },
    clientId:{
      type: Number,
      ref: Client

    }
    
    
  });
  
const Payment = mongoose.model('Payment', paymentSchema);

exports.Payment = Payment; 
exports.paymentSchema = paymentSchema;