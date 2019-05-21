import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'royalGold',
  templateUrl: './royalGold.component.html',
  styleUrls: ['./royalGold.component.css']
})
export class RoyalGoldComponent implements OnInit {

  constructor() { }

  menu:any;
  checkBoxCountDrink:number=0;
  checkBoxCountDrinkChoice:number=0;
  drinkAditionalChoice:number=0;
  royalGold:any;
  royalGoldDrink=[];
  royalGoldSalad=[];
  royalGoldDressing=[];
  royalGoldRice=[];
  royalGoldChicken=[];
  royalGoldFish=[];
  royalGoldVegitable=[];
  royalGoldCondiments=[];
  royalGoldDesserts=[];
  
 
  
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
    if(this.checkBoxCountDrink>=this.royalGoldDrink[0].choiceOf){
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

  displayRoyalGold(){
    
    for (let i = 0; i<this.menu.MenuItems.length ; i++) {
  
      if(this.menu.MenuItems[i].CategoryId==1){
        this.royalGoldDrink.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==2){
          this.royalGoldSalad.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==3){
          this.royalGoldDressing.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==4){
          this.royalGoldRice.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==5){
          this.royalGoldChicken.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==6){
          this.royalGoldFish.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==7){
          this.royalGoldVegitable.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==8){
          this.royalGoldCondiments.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==9){
          this.royalGoldDesserts.push(this.menu.MenuItems[i]);
              }
     
     }
 }
  



  ngOnInit() {
    
    this.menu=
{
    MenuId:1,MenuName:"royalGold",MenuPrice:4340,
    MenuItems:[{CategoryId:1,ItemId:1,CategoryName:"Drink",ItemName:"Mango",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:2,CategoryName:"Drink",ItemName:"Orange",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:3,CategoryName:"Drink",ItemName:"Guave",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:4,CategoryName:"Drink",ItemName:"Mix Fruit",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:5,CategoryName:"Drink",ItemName:"Black Current",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:2,ItemId:1,CategoryName:"SALAD BAR",ItemName:"Mixed Vegitable Salad",CategoryPrice:200,ChoiceOf:3},
    {CategoryId:2,ItemId:2,CategoryName:"SALAD BAR",ItemName:"Russian Egg Salad",CategoryPrice:200,ChoiceOf:3}
  ]
}


this.displayRoyalGold();




}








}
