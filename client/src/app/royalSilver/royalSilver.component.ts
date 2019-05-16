import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'royalSilver',
  templateUrl: './royalSilver.component.html',
  styleUrls: ['./royalSilver.component.css']
})
export class RoyalSilverComponent implements OnInit {

  menus:any;
  checkBoxCount:any;


  constructor() { }

  ngOnInit() {

    this.menus=[{MenuId:1,MenuName:"royalSilver",MenuPrice:3490,
    MenuItems:[{CatgoryId:1,ItemId:1,CategoryName:"Drink",ItemName:"Mango",CategoryPrice:100,ChoiceOf:1},
    {CatgoryId:1,ItemId:2,CategoryName:"Drink",ItemName:"Orange",CategoryPrice:100,ChoiceOf:1},
    {CatgoryId:1,ItemId:3,CategoryName:"Drink",ItemName:"Guave",CategoryPrice:100,ChoiceOf:1},
    {CatgoryId:1,ItemId:4,CategoryName:"Drink",ItemName:"Mix Fruit",CategoryPrice:100,ChoiceOf:1},
{CatgoryId:1,ItemId:1,CategoryName:"Drink",ItemName:"Mango",CategoryPrice:100,ChoiceOf:1},
{CatgoryId:2,ItemId:1,CategoryName:"SALAD BAR",ItemName:"Mixed Vegitable Salad",CategoryPrice:200,ChoiceOf:3},
{CatgoryId:2,ItemId:2,CategoryName:"SALAD BaR",ItemName:"Russian Egg Salad",CategoryPrice:200,ChoiceOf:3}

  ]},



];
  }

checkValidity(){
// if(this.checkBoxCount )
}
increment(){
//  this.checkBoxCount++;
}
checkValidityCoice(){

} 
incrementChioce(){
console.log("Bingo");
}

}
