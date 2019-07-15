const Joi=require('joi');
const express = require('express');
const app=express();
const mongoose = require('mongoose');
const path = require("path");


const Category=require('./routes/category');
const Menu=require('./routes/menus');
const Item=require('./routes/item');
const Client=require('./routes/client');
const User=require('./routes/user');
const UserLogin=require('./routes/userLogin');
const SerachItem=require('./routes/searchItem');
const Counter=require('./routes/counter');
const Service=require('./routes/services');
const categoryItems=require('./routes/categoryItems');
const menuItems=require('./routes/menuItems');





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

app.use(express.json());
app.use("/images", express.static(path.join("images")));

app.use('/api/categories', Category);
app.use('/api/menus', Menu);
app.use('/api/item', Item);
app.use('/api/client', Client);
app.use('/api/user', User);
app.use('/api/userLogin', UserLogin);
app.use('/api/searchItem', SerachItem);
app.use('/api/counter', Counter);
app.use('/api/services', Service);
app.use('/api/categoryItems', categoryItems);
app.use('/api/menuItems', menuItems);




const port=process.env.PORT || 3000;

app.listen(port, ()=>console.log(`listning on port ${port}`));
