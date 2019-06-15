const express = require('express');
const router = express.Router();
const {Counter} = require('../models/counter'); 
const {Category} = require('../models/category'); 
const {Menu} = require('../models/menu'); 



router.get('/:id', async (req, res) => {
    let menu = await Menu.findById({_id:req.params.id});
    let categories = await Category.find();
    let items=menu.item;
    
    for(let i=0;i<categories.length;i++){
        let categoryItems={
            categoryName:categories[i].name,
            categoryPrice:categories[i].price,
            itemsList:[]
        }
        items.aggregate([
            {$match:{categoryId: categories[i]._id}},
            { $project:{
                name:1,
                categoryName:categories[i].name,
            }},
         ]);
         categoryItems.itemsList=items;
         categoryItemList.push(categoryItems);
    }
    res.send(categoryItemList);
  });