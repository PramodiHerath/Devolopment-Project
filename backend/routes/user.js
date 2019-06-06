const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const {User} = require('../models/user');

router.post('/', async (req, res) => {
    const passwordSalt=await bcrypt.genSalt(10);
    const passwordHash=await bcrypt.hash(req.body.password,passwordSalt);

   let usertoCreate = new User({ 
    _id: req.body.userName,
    name: req.body.userName,
    password: passwordHash,
    role:req.body.userRole,
    isAdmin:req.body.isAdmin,
    telePhoneNumber:req.body.telePhoneNumber,
    emailAddress:req.body.emailAddress
    
  })
  
    usertoCreate = await usertoCreate.save();


    res.send(usertoCreate);

});

router.get('/', async (req, res) => {

    const user = await User.find();
    res.send(user);

  });

  
module.exports = router;  
