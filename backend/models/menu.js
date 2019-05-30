const mongoose = require('mongoose');
const {Item}= require('./item')

const menuSchema = new mongoose.Schema({
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
    price: {
        type: Number,
        required: true,
    },
    item:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Item
        }
    ]
  });
  
  const Menu = mongoose.model('Menu', menuSchema);

exports.Menu = Menu; 
exports.menuSchema = menuSchema;