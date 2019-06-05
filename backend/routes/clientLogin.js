const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const {Client} = require('../models/client');

router.post('/', async (req, res) => {
    
    const client= await User.findOne({name:req.body.clientName});
  if (!client) return res.status(400).send('Invalid client Name');

  const valid=await  bcrypt.compare( req.body.password,client.password);
    if(!valid)return res.status(400).send('Inavlid password');

    const token=jwt.sign({clientName:client.clientName},'UserPrivateKey');

    const tokenTosend={
        token:token
    }
    res.send(tokenTosend);
    


});



module.exports = router;  
