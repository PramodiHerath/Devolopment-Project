const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {Rating} = require('../models/rating');

router.get('/', async (req, res) => {
  let sections=['Food','Services','Staff','Other']
  let feedbacks=[];
  let foodFeedBack={
    name:'Food',
    feedbacks:[
        {
            name:'Drink',
            count:0,
            totalRespones:0,
            percentage:0
        },{
            name:'Main Course',
            count:0,
            totalRespones:0,
            percentage:0
        },{
            name:'Dessert',
            count:0,
            totalRespones:0,
            percentage:0
        }
    ]
 
  };
  let servicesFeedBack={
    name:'Services',
    feedbacks:[
        {
            name:'Sanitary',
            count:0,
            totalRespones:0,
            percentage:0
        },{
            name:'Decorations',
            count:0,
            totalRespones:0,
            percentage:0
        },{
            name:'Equipments',
            count:0,
            totalRespones:0,
            percentage:0
        }
    ]
  };
  let staffFeedBack={
    name:'Staff',
    feedbacks:[
        {
            name:'Receptionist',
            count:0,
            totalRespones:0,
            percentage:0
        },{
            name:'Banquet Manager',
            count:0,
            totalRespones:0,
            percentage:0
        },{
            name:'Buffet sttaf',
            count:0,
            totalRespones:0,
            percentage:0
        }
    ]
  };
  let otherFeedBack={
    name:'Other',
    feedbacks:[
        {
            name:'Air Conditions',
            count:0,
            totalRespones:0,
            percentage:0
        },{
            name:'Lights',
            count:0,
            totalRespones:0,
            percentage:0
        },{
            name:'Sounds',
            count:0,
            totalRespones:0,
            percentage:0
        }
    ]
  };

  const ratings = await Rating.find();
  ratings.forEach(rating=>{
      rating.feedback.forEach(feedBack=>{
          feedbacks.push(feedBack);
      })

  })

  feedbacks.forEach(feedback=>{
    if(feedback.title=='drink'){
        foodFeedBack.feedbacks[0].count+=feedback.rating;
        foodFeedBack.feedbacks[0].totalRespones++;
    }
    else if(feedback.title=='mainCourse'){
        foodFeedBack.feedbacks[1].count+=feedback.rating;
        foodFeedBack.feedbacks[1].totalRespones++;
    }
    else if(feedback.title=='dessert'){
        foodFeedBack.feedbacks[2].count+=feedback.rating;
        foodFeedBack.feedbacks[2].totalRespones++;
    }
    else if(feedback.title=='receptionist'){
        staffFeedBack.feedbacks[0].count+=feedback.rating;
        staffFeedBack.feedbacks[0].totalRespones++;
    }
    else if(feedback.title=='buffetStaff'){
        staffFeedBack.feedbacks[1].count+=feedback.rating;
        staffFeedBack.feedbacks[1].totalRespones++;
    }
    else if(feedback.title=='management'){
        staffFeedBack.feedbacks[2].count+=feedback.rating;
        staffFeedBack.feedbacks[2].totalRespones++;
    }
    else if(feedback.title=='sanitaryFacilities'){
        servicesFeedBack.feedbacks[0].count+=feedback.rating;
        servicesFeedBack.feedbacks[0].totalRespones++;
    }
    else if(feedback.title=='decoration'){
        servicesFeedBack.feedbacks[1].count+=feedback.rating;
        servicesFeedBack.feedbacks[1].totalRespones++;
    }
    else if(feedback.title=='equipments'){
        servicesFeedBack.feedbacks[2].count+=feedback.rating;
        servicesFeedBack.feedbacks[2].totalRespones++;
    }
    else if(feedback.title=='airConditioning'){
        otherFeedBack.feedbacks[0].count+=feedback.rating;
        otherFeedBack.feedbacks[0].totalRespones++;
    }
    else if(feedback.title=='lights'){
        otherFeedBack.feedbacks[1].count+=feedback.rating;
        otherFeedBack.feedbacks[1].totalRespones++;
        
    }
    else if(feedback.title=='sounds'){
        otherFeedBack.feedbacks[2].count+=feedback.rating;
        otherFeedBack.feedbacks[2].totalRespones++;
        
    }
  })

 foodFeedBack.feedbacks.forEach(feedback=>{
     feedback.percentage=(Math.round((feedback.count/(feedback.totalRespones*10))*100)).toString()+"%"
 })
 servicesFeedBack.feedbacks.forEach(feedback=>{
    feedback.percentage=(Math.round((feedback.count/(feedback.totalRespones*10))*100)).toString()+"%"
})
otherFeedBack.feedbacks.forEach(feedback=>{
    feedback.percentage=(Math.round((feedback.count/(feedback.totalRespones*10))*100)).toString()+"%"
})
staffFeedBack.feedbacks.forEach(feedback=>{
    feedback.percentage=(Math.round((feedback.count/(feedback.totalRespones*10))*100)).toString()+"%"
})

 let dataTosend=[];
 dataTosend.push(foodFeedBack);
 dataTosend.push(servicesFeedBack);
 dataTosend.push(staffFeedBack);
 dataTosend.push(otherFeedBack);
  res.send(dataTosend); 
 
});

module.exports = router;  
