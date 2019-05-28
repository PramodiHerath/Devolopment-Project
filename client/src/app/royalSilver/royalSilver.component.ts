import { Globals } from './../globals';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'royalSilver',
  templateUrl: './royalSilver.component.html',
  styleUrls: ['./royalSilver.component.css']
})
export class RoyalSilverComponent implements OnInit {

  constructor(public global: Globals ) { 
    
  }

  menu:any;
  checkBoxCountDrink:number=0;
  checkBoxCountDrinkChoice:number=0;
  drinkAditionalChoice:number=0;
  royalSilver:any;
  royalSilverDrink=[];
  royalSilverSalad=[];
  royalSilverDressing=[];
  royalSilverRice=[];
  royalSilverChicken=[];
  royalSilverFish=[];
  royalSilverVegitable=[];
  royalSilverCondiments=[];
  royalSilverDesserts=[];
  
 
  
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
   this.global.silverCharges+=this.checkBoxCountDrinkChoice*100;
    
  }
  
  checkValidityCoiceDrink(){
  
  }

  displayRoyalSilver(){
    
    for (let i = 0; i<this.menu.MenuItems.length ; i++) {
  
      if(this.menu.MenuItems[i].CategoryId==1){
        this.royalSilverDrink.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==2){
          this.royalSilverSalad.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==3){
          this.royalSilverDressing.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==4){
          this.royalSilverRice.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==5){
          this.royalSilverChicken.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==6){
          this.royalSilverFish.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==7){
          this.royalSilverVegitable.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==8){
          this.royalSilverCondiments.push(this.menu.MenuItems[i]);
              }
        else if(this.menu.MenuItems[i].CategoryId==9){
          this.royalSilverDesserts.push(this.menu.MenuItems[i]);
              }
     
     }
 }
  



  ngOnInit() {
    
    this.menu=
{
    MenuId:1,MenuName:"royalSilver",MenuPrice:3250,
    MenuItems:[{CategoryId:1,ItemId:1,CategoryName:"Drink",ItemName:"Mango",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:2,CategoryName:"Drink",ItemName:"Orange",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:3,CategoryName:"Drink",ItemName:"Guave",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:4,CategoryName:"Drink",ItemName:"Mix Fruit",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:1,ItemId:1,CategoryName:"Drink",ItemName:"Mango",CategoryPrice:100,ChoiceOf:1},
    {CategoryId:2,ItemId:1,CategoryName:"SALAD BAR",ItemName:"Mixed Vegitable Salad",CategoryPrice:200,ChoiceOf:3},
    {CategoryId:2,ItemId:2,CategoryName:"SALAD BAR",ItemName:"Russian Egg Salad",CategoryPrice:200,ChoiceOf:3}
  ]
}


this.displayRoyalSilver();




}








}
