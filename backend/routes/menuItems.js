// const express = require('express');
// const router = express.Router();
// const {Counter} = require('../models/counter'); 
// const {Category} = require('../models/category'); 
// const {Menu} = require('../models/menu'); 

// router.get('/:id', async (req, res) => {
//     let categories = await Category.find();
//     let MenuItemList=new Array;
    
//     for(let i=0;i<categories.length;i++){
//         let categoryItems={
//             categoryName:categories[i].name,
//             categoryPrice:categories[i].price,
//             itemsList:[]
//         }
//         let menu = await Menu.find({_id:req.params.id});
//         menu.item.aggregate([
//             {$match:{categoryId: categories[i]._id}},
//             { $project:{
//                 name:1,
//                 categoryName:categories[i].name,
//             }},
//          ]);
//          categoryItems.itemsList=items;
//          ItemList.push(categoryItems);
//     }
//     res.send(categoryItemList);
// });