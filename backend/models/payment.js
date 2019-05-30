const mongoose = require('mongoose');


const paymentSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true,
    },
    type: [{
      type: String,
      required: true,
    }
    ]
    
    
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);

exports.Payement = Payment; 
exports.paymentSchema = paymentSchema;