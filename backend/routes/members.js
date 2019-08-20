const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {Counter} = require('../models/counter'); 

const {Member} = require('../models/members');

router.post('/', async (req, res) => {

    const member= await Member.findOne({name:req.body.name});
  if (member) return res.status(400).send('Member Exists.');

  let counter=await Counter.findOneAndUpdate({ "name" : "Member" },{ $inc: { "value" : 1 } });

    const passwordSalt=await bcrypt.genSalt(10);
    const passwordHash=await bcrypt.hash(req.body.password,passwordSalt);


   let membertoCreate = new Member({ 
    _id: counter.value+1,
    clientId:req.body.clientId,
    name: req.body.name,
    telephoneNumber:req.body.telephoneNumber,
    password: passwordHash,
    emailAddress:req.body.emailAddress
    
  })
  
  membertoCreate = await  membertoCreate.save();
    res.send( membertoCreate);

});


router.get('/', async (req, res) => {

    const user = await User.find();
    res.send(user);

  });


  
module.exports = router;  
