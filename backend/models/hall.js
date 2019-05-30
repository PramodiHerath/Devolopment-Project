const mongoose = require('mongoose');


const hallSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 150
    },
    capacity:{
        type: Number,
        required:true
    }
    
  });
  
  const Hall = mongoose.model('Hall', hallSchema);

exports.Hall = Hall; 
exports.hallSchema = hallSchema;