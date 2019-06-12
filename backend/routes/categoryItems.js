const express = require('express');
const router = express.Router();
const {Counter} = require('../models/counter'); 
const {Category} = require('../models/category'); 
const {Item} = require('../models/item'); 

router.get('/', async (req, res) => {
    let categories = await Category.find();
    let categoryItemList=new Array;
    
    for(let i=0;i<categories.length;i++){
        let categoryItems={
            categoryName:categories[i].name,
            categoryPrice:categories[i].price,
            itemsList:[]
        }
        let items = await Item.aggregate([
            {$match:{categoryId: categories[i]._id}},
            { $project:{
                name:1,
                categoryName:categories[i].name,
            }},
         ]);
         categoryItems.itemsList=items;
         categoryItemList.push(categoryItems);
    }


    // for(let i=0;i<categories.length;i++){
    //     let items = await Item.aggregate([
    //         {$match:{categoryId: categories[i]._id}},
    //         { $project:{
    //             name:1
    //         }},
    //      ]);

    //      let category=await Category.aggregate([
    //         {$match:{_id: categories[i]._id}},
    //         { $project:{
    //             name:1,
    //             price:1,
    //             itemsList:items
    //         }},
    //      ]);
    //     //  categoryItems.itemsList=items;
    //      categoryItemList.push(category);
    // }
    


    res.send(categoryItemList);
  });
  

  router.get('/:id', async (req, res) => {
    const items = await Item.find({categoryId:req.params.id}).populate('categoryId');
    res.send(items);
    
  });
  
  module.exports = router; 