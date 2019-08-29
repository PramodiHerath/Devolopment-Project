const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Booking} = require('../models/booking');
const {Hall} = require('../models/hall');
const {Rating} = require('../models/rating');

router.get('/', async (req, res) => {
  let sections=['Food','Services','Staff','Other']
  let feedbacks=[];
//   object creation for each section
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

//   getting all past ratings and putting each objects' feedback array items to arry feedbacks
  const ratings = await Rating.find();
  ratings.forEach(rating=>{
      rating.feedback.forEach(feedBack=>{
          feedbacks.push(feedBack);
      })

  })

// setting total number of responses for each title and setting total rated count for each
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

//   setting percentange of ratings for each section title
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

// array consisting all four sections and each of their titles overall percentages
 let dataTosend=[];
 dataTosend.push(foodFeedBack);
 dataTosend.push(servicesFeedBack);
 dataTosend.push(staffFeedBack);
 dataTosend.push(otherFeedBack);
  res.send(dataTosend); 
 
});


router.get('/getBookingsReport', async (req, res) => {

    let months=[
        {
            name:'January',
            id:0,
            halls:[],
        },
        {
            name:'February',
            id:1,
            halls:[],
        },
        {
            name:'March',
            id:3,
            halls:[],
        },
        {
            name:'April',
            id:3,
            halls:[],
        },
        {
            name:'May',
            id:4,
            halls:[],
        },
        {
            name:'June',
            id:5,
            halls:[],
        },
        {
            name:'July',
            id:6,
            halls:[],
        },
        {
            name:'August',
            id:7,
            halls:[],
        },
        {
            name:'September',
            id:8,
            halls:[],
        },
        {
            name:'Octomber',
            id:9,
            halls:[],
        },

        {
            name:'November',
            id:10,
            halls:[],
        },
        {
            name:'December',
            id:11,
            halls:[],
        },
    ]
    let yearQuery=req.query.year;
    const bookings = await Booking.find().populate('hallId');
    const halls = await Hall.find();
    let bookingsOfYear=[];

    bookings.forEach(booking=>{
        if(new Date(booking.date).getFullYear()==parseInt(yearQuery)){
            bookingsOfYear.push(booking)
        }    
    })

   
    months.forEach(month=>{
        let hallsToSend=[];
        halls.forEach(hall=>{
            let hallToPush={
                name:hall.name,
                count:0
            }
            bookingsOfYear.forEach(booking=>{
                if(hall._id==booking.hallId._id){
                    if(booking.date.getMonth()==month.id){
                        hallToPush.count++;
                    }
                }
            })
            hallsToSend.push(hallToPush);
        })
        month.halls=hallsToSend
    })
    

    res.send(months);
  });
  

  
router.get('/oneMonthBookings/all', async (req, res) => {
    let monthQuery=req.query.month;
    let yearQuery=req.query.year;
    let bookingsToSend=[]
    const bookings = await Booking.find().populate('hallId');
   
    
    bookings.forEach(booking=>{
        if(new Date(booking.date).getMonth()==parseInt(monthQuery)){
            if(new Date(booking.date).getFullYear()==parseInt(yearQuery)){
                    
                bookingsToSend.push(booking);
            }  
        }
    })

    res.send(bookingsToSend);
  });
  


module.exports = router;  
