import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'royalPlatinum',
  templateUrl: './royalPlatinum.component.html',
  styleUrls: ['./royalPlatinum.component.css']
})
export class RoyalPlatinumComponent implements OnInit {

  constructor() { }

  menu:any;
  checkBoxCountDrink:number=0;
  checkBoxCountDrinkChoice:number=0;
  drinkAditionalChoice:number=0;
  royalPlatinum:any;
  royalPlatinumDrink=[];
  royalPlatinumSalad=[];
  royalPlatinumDressing=[];
  royalPlatinumRice=[];
  royalPlatinumChicken=[];
  royalPlatinumFish=[];
  royalPlatinumVegitable=[];
  royalPlatinumCondiments=[];
  royalPlatinumDesserts=[];
  
 
  
  incrementDrink(event: Event){

    const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.checkBoxCountDrink++;
    
  }
  else if(!checkbox.checked){
    this.checkBoxCountDrink--;
    
  }
    
  }
  
  checkValidityDrink(){
    if(this.checkBoxCountDrink>=1){
      return true;
    }
    else{
      return false;
    }
  }
  incrementChioceDrink(e: Event){
    const checkboxChoice = e.target as HTMLInputElement;

    if (checkboxChoice.checked) {
      this.checkBoxCountDrinkChoice++;
      
    }
    else if(!checkboxChoice.checked){
      this.checkBoxCountDrinkChoice--;
      
    }
   console.log(this.checkBoxCountDrinkChoice*100);
    return this.checkBoxCountDrinkChoice*100;
    
  }
  
  checkValidityCoiceDrink(){
  
  }

  displayRoyalPlatinum(){
    
    for (let i = 0; i<this.menu.MenuItems.length ; i++) {
  
      if(this.menu.MenuItems[i].CategoryId==1){
        this.royalPlatinumDrink.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==2){
          this.royalPlatinumSalad.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==3){
          this.royalPlatinumDressing.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==4){
          this.royalPlatinumRice.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==5){
          this.royalPlatinumChicken.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==6){
          this.royalPlatinumFish.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==7){
          this.royalPlatinumVegitable.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==8){
          this.royalPlatinumCondiments.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==9){
          this.royalPlatinumDesserts.push(this.menu.MenuItems[i]);
              }
     
     }
 }
  



  ngOnInit() {
    
    this.menu=
{
    MenuId:2,MenuName:"royalPlatinum",MenuPrice:5190,
    MenuItems:[{CategoryId:1,ItemId:1,CategoryName:"Drink",ItemName:"Mango",CategoryPrice:150,ChoiceOf:1},
    {CategoryId:1,ItemId:2,CategoryName:"Drink",ItemName:"Orange",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:3,CategoryName:"Drink",ItemName:"Guave",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:4,CategoryName:"Drink",ItemName:"Mix Fruit",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:5,CategoryName:"Drink",ItemName:"Mango",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:6,CategoryName:"Drink",ItemName:"Black Current",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:2,ItemId:1,CategoryName:"APPETIZER",ItemName:"Sea Food Cocktail",CategoryPrice:200,ChoiceOf:2},
    {CategoryId:2,ItemId:2,CategoryName:"APPETIZER",ItemName:"Russian Egg Salad",CategoryPrice:200,ChoiceOf:2}
  ]
}


this.displayRoyalPlatinum();




}








}
