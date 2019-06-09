const mongoose = require('mongoose');


const serviceSchema = new mongoose.Schema({
    _id:{
        type: Number,
        
    },
    name: {
      type: String,
      required: true,
      maxlength: 150
    },
    price: {
        type: Number,
        required: true,
    },
    
  });
  
  const Service = mongoose.model('Service', serviceSchema);

exports.Service = Service; 
exports.serviceSchema = serviceSchema;