const mongoose = require('mongoose');
const {Category}= require('./category')

const itemmSchema = new mongoose.Schema({
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
    price:{
        type: Number
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Category

    }
  });
  
  const Item = mongoose.model('Item', itemSchema);

exports.Item = Item; 
exports.itemSchema = itemSchema;