const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
    _id:{
        type: String,
     
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
  
  const Client = mongoose.model('Client', clientSchema);

exports.Client = Client; 
exports.clientSchema = clientSchema;