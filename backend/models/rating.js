const mongoose = require('mongoose');


const ratingSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
      feedback:[{

        section: {
            type: String,
            required: true,
          
          },
          title: {
              type: String,
              required: true,
            
            },
            rating: {
              type: Number,
              required: true,
            
            }
    }]

  });
  
  const Rating = mongoose.model('Rating', ratingSchema);

exports.Rating = Rating; 
exports.ratingSchema = ratingSchema;