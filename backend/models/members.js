const mongoose = require('mongoose');
const {Client}= require('./client');

const memberSchema = new mongoose.Schema({
    _id:{
        type: String,
     
    },
    clientId:{
        type: String,
        ref: Client
    },
    name: {
      type: String,
      required: true,
     
    },
    telephoneNumber: {
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