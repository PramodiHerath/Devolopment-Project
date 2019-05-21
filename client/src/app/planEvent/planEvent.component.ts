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
    
    
  }
  )

  silverPrice=3250;
  goldPrice=4340;
  platinumPrice=5190;
  menuPrice:number;
  showGold:boolean;
  showSilver:boolean;
  showPlatinum:boolean;

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

  ngOnInit() {
  }

}
