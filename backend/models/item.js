const mongoose = require('mongoose');
const {Category}= require('./category')

const itemSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    categoryName:{
        type: String,
        ref: Category

    }
  });
  
  const Item = mongoose.model('Item', itemSchema);

exports.Item = Item; 
exports.itemSchema = itemSchema;