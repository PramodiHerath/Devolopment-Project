import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'planEvent',
  templateUrl: './planEvent.component.html',
  styleUrls: ['./planEvent.component.css']
})
export class PlanEventComponent implements OnInit {
  constructor() { }
  eventPlanForm = new FormGroup({
    capacity: new FormControl('',Validators.required),
    duration: new FormControl('',Validators.required),
    screen:new FormControl(''),
    tiffanyChairs:new FormControl(''),
    milkRicePortion:new FormControl('')
    
    
  }
  )

  silverPrice=3250;
  goldPrice=4340;
  platinumPrice=5190;
  menuPrice:number;
  showGold:boolean;
  showSilver:boolean;
  showPlatinum:boolean;
  Capacity:number;
  Duration:number;
  Draping:number=0;
  Champagne:number=0;
  DryIce:number=0;
  MilkPlatter:number=0;
  Deco:number=0;
  Screen:number=0;
  TiffanyChairs:number=0;
  MilkRicePortion:number=0;
  Budget:number;
  ScreenAmount:number;
  TiffanyChairsAmount:number;
  MilkRicePortionAmount:number;
  ExtendedHourCharge:number;
  ScreenCharge:number;
  TiffanyChairsCharge:number;
  MilkRicePortionCharge:number;
  ShowBudget:any;




  royalSilverPic= '/assets/images/royalSilver.jpg';
  royalGoldPic= '/assets/images/royalGold.jpg';
  royalPlatinumPic= '/assets/images/royalPlatinum.jpg';

selectRoyalSilver(){
  this.showGold=false;
  this.showPlatinum=false;
  this.showSilver=true;
  this.menuPrice=this.silverPrice;
}
 
selectRoyalGold(){
  this.showGold=true;
  this.showPlatinum=false;
  this.showSilver=false;
  this.menuPrice=this.goldPrice;

}
selectRoyalPlatinum(){
  this.showGold=false;
  this.showPlatinum=true;
  this.showSilver=false;
  this.menuPrice=this.platinumPrice;
}

addDraping(event: Event){
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.Draping=120000;
    
  }
  else if(!checkbox.checked){
    this.Draping=0;
    
  }
    
}
addChampagne(event: Event){
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.Champagne=2000;
    
  }
  else if(!checkbox.checked){
    this.Champagne=0;
    
  }
}
addDryIce(event: Event){
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.DryIce=3500;
    
  }
  else if(!checkbox.checked){
    this.DryIce=0;
    
  }
}
addMilkPlatter(event: Event){
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.MilkPlatter=2000;
    
  }
  else if(!checkbox.checked){
    this.MilkPlatter=0;
    
  }
}
addDeco(event: Event){
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.Deco=120000;
    
  }
  else if(!checkbox.checked){
    this.Deco=25000;
    
  }
}
addScreen(event: Event){
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.Screen=6000;
    
  }
  else if(!checkbox.checked){
    this.Screen=0;
    
  }
}
addTiffanyChairs(event: Event){
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.TiffanyChairs=200;
    
  }
  else if(!checkbox.checked){
    this.TiffanyChairs=0;
    
  }
}
addMilkRicePortion(event: Event){
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    this.MilkRicePortion=200;
    
  }
  else if(!checkbox.checked){
    this.MilkRicePortion=0;
    
  }
}


calculateBudget(data){
  this.Capacity=Number(data.capacity);
  this.Duration=Number(data.duration);
  this.ScreenAmount=Number(data.screen);
  this.ScreenCharge=this.ScreenAmount*this.Screen;
  this.TiffanyChairsAmount=Number(data.tiffanyChairs);
  this.TiffanyChairsCharge=this.TiffanyChairsAmount*this.TiffanyChairs;
  this.MilkRicePortionAmount=Number(data.milkRicePortion);
  this.MilkRicePortionCharge=this.MilkRicePortionAmount*this.MilkRicePortion;

  if(this.Duration>5){
    this.ExtendedHourCharge=(this.Duration-5)*50000;
    
  }
  else{
    this.ExtendedHourCharge=0;
  }
  this.Budget=this.ExtendedHourCharge+this.ScreenCharge+this.TiffanyChairsCharge+this.MilkRicePortionCharge+this.Draping+this.Champagne+this.DryIce+this.MilkPlatter;

  this.ShowBudget=+this.Budget;
  console.log(this.Budget);
}

  ngOnInit() {
  }

}
