const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {Client} = require('../models/client');

router.post('/', async (req, res) => {
  const passwordSalt=await bcrypt.genSalt(10);
  const passwordHash=await bcrypt.hash(req.body.password,passwordSalt);

   let clienttoCreate = new Client({ 
    _id: req.body.clientName,
    name: req.body.clientName,
    telephoneNumber: req.body.clientPhoneNumber,
    emailAddress: req.body.clientEmailAddress,
    password: passwordHash
    
  })
  
    clienttoCreate = await clienttoCreate.save();

    res.send(clienttoCreate);

});

router.get('/', async (req, res) => {
    const client = await client.find();
    res.send(client);
  });

module.exports = router;  
