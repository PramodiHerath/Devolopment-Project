const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const {Member} = require('../models/members');

router.post('/', async (req, res) => {
  
    
    const member= await Member.findOne({name:req.body.userName});
  if (!member) return res.status(400).send('Invalid User Name');

  const valid=await  bcrypt.compare( req.body.password,member.password);
    if(!valid)return res.status(400).send('Inavlid password');

    const token=jwt.sign({userName:member.name,clientId:member.clientId},'UserPrivateKey');

    const tokenTosend={
        token:token
    }
    res.send(tokenTosend);
    
console.log("blah")

});



module.exports = router;  
