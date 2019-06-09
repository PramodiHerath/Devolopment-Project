const mongoose = require('mongoose');
const {Category}= require('./category')

const itemSchema = new mongoose.Schema({
    _id:{
        type: Number,
       
    },
    name: {
      type: String,
      required: true,
    
    },
    categoryId:{
      type: Number,
        ref: Category

    }
  });
  
  const Item = mongoose.model('Item', itemSchema);

exports.Item = Item; 
exports.itemSchema = itemSchema;