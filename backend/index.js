const Joi=require('joi');
const express = require('express');
const app=express();
const mongoose = require('mongoose');

const Category=require('./routes/category');
const Menu=require('./routes/menu');
const Item=require('./routes/item');



app.use(express.json());
app.use('/api/categories', Category);
app.use('/api/menus', Menu);
app.use('/api/items', Item);









mongoose.connect('mongodb://localhost/RoyalPark',{ useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,PUT, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});


const port=process.env.PORT || 3000;

app.listen(port, ()=>console.log(`listning on port ${port}`));
