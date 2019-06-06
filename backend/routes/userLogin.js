const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const {User} = require('../models/user');

router.post('/', async (req, res) => {
  
    
    const user= await User.findOne({name:req.body.userName});
  if (!user) return res.status(400).send('Invalid User Name');

  const valid=await  bcrypt.compare( req.body.password,user.password);
    if(!valid)return res.status(400).send('Inavlid password');

    const token=jwt.sign({userName:user.userName,isAdmin:user.isAdmin,userRole:user.role},'UserPrivateKey');

    const tokenTosend={
        token:token
    }
    res.send(tokenTosend);
    


});



module.exports = router;  
