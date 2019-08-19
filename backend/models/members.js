const mongoose = require('mongoose');


const memberSchema = new mongoose.Schema({
    _id:{
        type: String,
     
    },
    name: {
      type: String,
      required: true,
     
    },
    telePhoneNumber: {
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    emailAddress:{
        type: String,
        required: true,

    }
    
  });
  
  const Member = mongoose.model('Member', memberSchema);

exports.Member = Member; 
exports.memberSchema = memberSchema;