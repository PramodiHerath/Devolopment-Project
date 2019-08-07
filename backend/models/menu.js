const mongoose = require('mongoose');
const {Item}= require('./item')
const {Category}= require('./category')

const menuSchema = new mongoose.Schema({
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
    },
    item:[
        {
            type: Number,
            ref: Item
        }
    ],
    choice:[{

        categoryId: {
        type: Number,
        ref: Category
        },
        categoryName:{
            type:String
        },
        noOfChoice:{
            type: Number
        }}],
    menuImagePath: { type: String, required: true }


  });
  
  const Menu = mongoose.model('Menu', menuSchema);

exports.Menu = Menu; 
exports.menuSchema = menuSchema;