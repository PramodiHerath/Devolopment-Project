const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const {Menu} = require('../models/client');

router.post('/', async (req, res) => {

   let clienttoCreate = new Client({ 
    _id: req.body.clientName,
    name: req.body.clientName,
    telephoneNumber: req.body.clientPhoneNumber,
    emailAddress: req.body.clientEmailAddress,
    password: req.body.clientPassword
    
  })
  
    clienttoCreate = await clienttoCreate.save();

    res.send(clienttoCreate);

});

router.get('/', async (req, res) => {
    const client = await client.find();
    res.send(client);
  });

module.exports = router;  
