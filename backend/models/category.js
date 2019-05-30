const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
    }
    
  });
  
  const Category = mongoose.model('Category', categorySchema);

exports.Category = Category; 
exports.categorySchema = categorySchema;