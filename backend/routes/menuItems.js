const express = require('express');
const router = express.Router();
const {Counter} = require('../models/counter'); 
const {Category} = require('../models/category'); 
const {Menu} = require('../models/menu'); 



router.get('/:id', async (req, res) => {
    let menu = await Menu.findById(req.params.id).populate({path:'item'});
    let categories = await Category.find();
    let menuCategories=[];
    
   
    
    for(let i=0;i<categories.length;i++){
        let categoryItem={
            categoryName:categories[i].name,
            categoryPrice:categories[i].price,
            choiceOf:0,
            itemsList:[]
        }
     
        for(let j=0;j<menu.item.length;j++){
            if(menu.item[j].categoryId==categories[i]._id){
                categoryItem.itemsList.push(menu.item[j]);
            }
        }
        for(let q=0;q<menu.choice.length;q++){
            if(menu.choice[q].categoryId==categories[i]._id){
                categoryItem.choiceOf=menu.choice[q].noOfChoice;
            }
        }
         
         menuCategories.push(categoryItem);
        
    }
   
    res.send(menuCategories);

  });


  module.exports=router