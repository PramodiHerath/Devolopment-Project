const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
    id:{
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
        type: email,
        required: true,

    }
  });
  
  const Client = mongoose.model('Client', clientSchema);

exports.Client = Client; 
exports.clientSchema = clientSchema;