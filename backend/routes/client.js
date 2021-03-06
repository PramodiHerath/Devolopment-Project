const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {Client} = require('../models/client');
const {Member} = require('../models/members');
const {Counter} = require('../models/counter'); 
const email=require('emailjs/email');

router.post('/sendEmail/toclient', async (req, res) => {
  
  let clientEmail=req.body.email;
  let url=req.body.url;

  var server 	= email.server.connect({
    user:    "weerakkody95dilshan", 
    password:"dilshan12345", 
    host:    "smtp.gmail.com", 
    ssl:     true
 });

 // let url='https://www.google.com/';
  
 server.send({
    text:   "Hotel Royal Park is willing to extend you the priviledged membership. To register click the link- "+url, 
    from:      "weerakkody95dilshan<weerakkody95dilshan@gmail.com>",
    to:    clientEmail, 
    //    cc:      "else <else@your-email.com>",
    subject: "Register As Member Request"
 }, function(err, message) {
     if(err)
 console.log(err);
 else
 return res.json({success: true, msg: 'sent'});
  });


});


router.post('/', async (req, res) => {
  const client= await Client.findOne({name:req.body.name});
  if (client) return res.status(400).send('Client Exists.');

  let counter=await Counter.findOneAndUpdate({ "name" : "Client" },{ $inc: { "value" : 1 } });

   let clienttoCreate = new Client({ 
    _id: counter.value+1,
    name: req.body.name,
    telephoneNumber: req.body.telephoneNumber,
    emailAddress: req.body.emailAddress,
    
    
  })
  
    clienttoCreate = await clienttoCreate.save();

    res.send(clienttoCreate);

});

router.get('/', async (req, res) => {
    const client = await Client.find();
    res.send(client);
  });
  
  router.get('/withoutMembers/all', async (req, res) => {
    let clientsToSend=[];
    const clients = await Client.find();
    const members=await Member.find();
    clients.forEach(client => {
      let isMember=false;
      members.forEach(member=>{
        if(client._id==member.clientId){
          isMember=true;
          return;
        }
      })

      if(!isMember){
        clientsToSend.push(client)
      }
      
    });

    
    res.send(clientsToSend);
  });
router.get('/:id', async (req, res) => {
  const client = await Client.find({_id:req.params.id});
  res.send(client);
  });

router.get('/searchClient/AllClients', async (req, res) => {
  console.log("cd")
  let clientNamePattern=req.query.clientName;
  pattern= new RegExp(clientNamePattern,"i");

    const client = await Client.find({name:pattern});
    res.send(client);
  });
module.exports = router;  
