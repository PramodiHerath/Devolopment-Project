const mongoose = require('mongoose');


const serviceSchema = new mongoose.Schema({
    _id:{
        type: Number,
        
    },
    name: {
      type: String,
      required: true,
      
    },
    price: {
        type: Number,
        required: true,
    },
    amount:{
      type:Boolean
    }
    
  });
  
  const Service = mongoose.model('Service', serviceSchema);

exports.Service = Service; 
exports.serviceSchema = serviceSchema;