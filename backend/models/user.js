const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    _id:{
        type: String,
     
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:true
    }
    
  });
  
  const User = mongoose.model('User', userSchema);

exports.User = User; 
exports.userSchema = userSchema;