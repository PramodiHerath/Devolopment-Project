const mongoose = require('mongoose');


const taxSchema = new mongoose.Schema({

    taxRate: {
      type: Number,
    }
    
  });
  
  const Tax = mongoose.model('Tax', taxSchema);
  

exports.Tax = Tax; 
exports.taxSchema = taxSchema;