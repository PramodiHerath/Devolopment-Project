const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const {Menu} = require('../models/menu');
const {Item} = require('../models/item');
const {Counter} = require('../models/counter');
const {Category} = require('../models/category');
const multer = require("multer");


const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});




router.post('/images',multer({ storage: storage }).single("image"), async (req, res) => {
 const url = req.protocol + "://" + req.get("host");
 let menuImagePath=url + "/images/" + req.file.filename;
 res.send(JSON.stringify(menuImagePath));
});

router.post('/', async (req, res) => {

 

  let itemArrLength=req.body.item.length;
  let choiceArrLength=req.body.choice.length;
  let choice=[];

  for(let i=0;i<itemArrLength;i++){
  let item=await Item.findOne({_id:req.body.item[i]});
  if(!item) return res.status(400).send('Invalid Item'); 
  }
  for(let i=0;i<choiceArrLength;i++){
    let category=await Category.findOne({name:req.body.choice[i].category});
    console.log(req.body.choice[i]);
    if(!category) return res.status(400).send('Invalid category')
  
    else {
      let x={
        categoryId:category._id,
        categoryName:category.name,
        noOfChoice:req.body.choice[i].noOfChoice
    };
    choice.push(x)
    
    }
  }
  let counter=await Counter.findOneAndUpdate({ "name" : "Menu" },{ $inc: { "value" : 1 } });
   let menutoCreate = new Menu({ 
    _id:counter.value+1,
    name: req.body.name,
    price: req.body.price,
    item:req.body.item,
    choice:choice,
    menuImagePath:  req.body.menuImagePath,
    
  })
  
    menutoCreate = await menutoCreate.save();

  res.send(menutoCreate);

});

router.get('/', async (req, res) => {
    const menu = await Menu.find().populate({path:'item',populate:{path:'categoryId'}});
   
    res.send(menu);
  });

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
      let menuToSend={
        menuName:menu.name,
        menuPrice:menu.price,
        menuCategoryItems:menuCategories
      }
    
      res.send(menuToSend);
  });

  router.put('/:id',async (req, res) => {
    const menu = await Menu.findByIdAndUpdate(req.params.id,
      { 
        name: req.body.menuName,
        price:req.body.menuPrice,
        item:  req.body.item
      }, { new: true });
  
    res.send(menu);
    });


module.exports = router;  
