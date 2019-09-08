const mongoose = require('mongoose');


const hallChargeSchema = new mongoose.Schema({

    hallCharge: {
      type: Number,
    }
    
  });
  
  const HallCharge = mongoose.model('HallCharge', hallChargeSchema);
  

exports.HallCharge = HallCharge; 
exports.hallChargeSchema = hallChargeSchema;