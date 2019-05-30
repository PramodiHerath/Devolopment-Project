const mongoose = require('mongoose');


const receptionistSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    telephoneNumber: {
        type: Number,
        required: true,
        length: 10
    },
    emailAddress:{
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true
    }
    
  });
  
  const Receptionist = mongoose.model('Receptionist', receptionistSchema);

exports.Receptionist = Receptionist; 
exports.receptionistSchema = receptionistSchema;