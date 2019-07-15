import { Component, OnInit } from '@angular/core';
// import { Globals } from './globals';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { MenuService } from '../serviceshttp/menu.service';
import { MenuItemsService } from '../serviceshttp/menuItems.service';
import { ServiceService } from '../serviceshttp/service.service';


@Component({
  selector: 'planEvent',
  templateUrl: './planEvent.component.html',
  styleUrls: ['./planEvent.component.css']
})

export class PlanEventComponent implements OnInit {

  constructor( private service: MenuService, private menuItemService: MenuItemsService, private serviceService: ServiceService) {
    this.viewMenus();
    this.viewServices();
  }

  eventPlanForm = new FormGroup({
    capacity: new FormControl('',Validators.required),
    duration: new FormControl('',Validators.required),
    draping:new FormControl(''),
    champagne:new FormControl(''),
    dryIce:new FormControl(''),
    milkPlatter:new FormControl(''),
    deco:new FormControl(''),
    screenCheck:new FormControl(''),
    screen:new FormControl(''),
    tiffanyChairsCheck:new FormControl(''),
    tiffanyChairs:new FormControl(''),
    milkRicePortionCheck:new FormControl(''),
    milkRicePortion:new FormControl('') 
  }
  )

  selectedMenu:any;
  menus:any;
  menuItems:any;
  items:any;
  services:any;
  menuPrice:number=0;
  clicked:boolean=false;
  Capacity:number=0;
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
  menuCharge:number=0;
  ShowBudget:any;
  additionalMenuCharges=0;
  
  drapingPrice:number;
  ChampagnePrice:number;
  dryIcePrice:number;
  milkRicePlatterPrice:number;
  decoPrice:number;
  screenPrice:number;
  tiffanyChairsPrice:number;
  milkRicePortionPrice:number;




  royalSilverPic= '/assets/images/royalSilver.jpg';
  royalGoldPic= '/assets/images/royalGold.jpg';
  royalPlatinumPic= '/assets/images/royalPlatinum.jpg';

  viewServices(){
  this.serviceService.getAllServices()
  .subscribe(
    response=>{
      console.log(response);
       this.services=response;
       for(let i=0; i<this.services.length;i++){
        if(this.services[i].name==="Full Ball Room Draping")
        this.drapingPrice=this.services[i].price;
        else if(this.services[i].name==="Dry Ice")
        this.dryIcePrice=this.services[i].price;
        else if(this.services[i].name==="Champagne Bottle")
        this.ChampagnePrice=this.services[i].price;
        else if(this.services[i].name==="Milk Rice Platter")
        this.milkRicePlatterPrice=this.services[i].price;
        else if(this.services[i].name==="Decoration for Foyer")
        this.decoPrice=this.services[i].price;
        else if(this.services[i].name==="Screen & Projector")
        this.screenPrice=this.services[i].price;
        else if(this.services[i].name==="Tiffany Chairs")
        this.tiffanyChairsPrice=this.services[i].price;
        else if(this.services[i].name==="Milk Rice Portion")
        this.milkRicePortionPrice=this.services[i].price;
      
  
      }
  },
    error=>{
      alert('An unexpected error occurred.');
      console.log(error);
  })  
 }


  viewMenus(){
    this.service.getAllMenus()
    .subscribe(
      response=>{
        console.log(response);
         this.menus=response;
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })  
   }


   selectMenu(menu){
     
     this.selectedMenu=menu.name;
     this.menuPrice=menu.price;
      this.clicked=true;
      this.menuItemService.getMenuItems(menu._id)
      .subscribe(
        response=>{
          console.log(response);
           this.menuItems=response;
           this.menuItems.forEach(element => {
            element.selectedItems=0;
            element.additionalCharges=0;
           });
           
           
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      })  

   }

   chooseItem(event,menuCatergory){
    if(event.checked){
      menuCatergory.selectedItems++;
      if(menuCatergory.selectedItems>menuCatergory.choiceOf){
        menuCatergory.additionalCharges+=menuCatergory.categoryPrice;
        this.additionalMenuCharges+=menuCatergory.categoryPrice;
      }
    }
    else if(!event.checked){
      if(menuCatergory.selectedItems>menuCatergory.choiceOf){
        menuCatergory.additionalCharges-=menuCatergory.categoryPrice
        this.additionalMenuCharges-=menuCatergory.categoryPrice;
      }
      menuCatergory.selectedItems--;
    }
    console.log(this.additionalMenuCharges);
   }




   //services
addDraping(event){
  // const checkbox = event.target as HTMLInputElement;

  if (event.checked) {
    this.Draping=this.drapingPrice;
    
  }
  else if(!event.checked){
    this.Draping=0;
    
  }
    
}
addChampagne(event){
  // const checkbox = event.target as HTMLInputElement;

  if (event.checked) {
    this.Champagne=this.ChampagnePrice;
    
  }
  else if(!event.checked){
    this.Champagne=0;
    
  }
}
addDryIce(event){
  // const checkbox = event.target as HTMLInputElement;

  if (event.checked) {
    this.DryIce=this.dryIcePrice;
    
  }
  else if(!event.checked){
    this.DryIce=0;
    
  }
}
addMilkPlatter(event){
  // const checkbox = event.target as HTMLInputElement;

  if (event.checked) {
    this.MilkPlatter=this.milkRicePlatterPrice;
    
  }
  else if(!event.checked){
    this.MilkPlatter=0;
    
  }
}
addDeco(event){
  // const checkbox = event.target as HTMLInputElement;

  if (event.checked) {
    this.Deco=this.decoPrice;
    
  }
  else if(!event.checked){
    this.Deco=0;
    
  }
}
addScreen(event){
  // const checkbox = event.target as HTMLInputElement;

  if (event.checked) {
    this.Screen=this.screenPrice;
    
  }
  else if(!event.checked){
    this.Screen=0;
    
  }
}
addTiffanyChairs(event){
  // const checkbox = event.target as HTMLInputElement;

  if (event.checked) {
    this.TiffanyChairs=this.tiffanyChairsPrice;
    
  }
  else if(!event.checked){
    this.TiffanyChairs=0;
    
  }
}
addMilkRicePortion(event){
  // const checkbox = event.target as HTMLInputElement;

  if (event.checked) {
    this.MilkRicePortion=this.milkRicePortionPrice;
  }
  else if(!event.checked){
    this.MilkRicePortion=0;
    
  }
}

// on Click of view rough budget button calculating budget and showing it 
calculateBudget(data){
  if(this.menuPrice&&data.capacity){

  this.Capacity=+data.capacity;
  this.menuPrice+=this.additionalMenuCharges;
  this.menuCharge=this.menuPrice*this.Capacity;
  this.Duration=+data.duration;
  this.ScreenAmount=+data.screen;
  this.ScreenCharge=this.ScreenAmount*this.Screen;
  this.TiffanyChairsAmount=+data.tiffanyChairs;
  this.TiffanyChairsCharge=this.TiffanyChairsAmount*this.TiffanyChairs;
  this.MilkRicePortionAmount=+data.milkRicePortion;
  this.MilkRicePortionCharge=this.MilkRicePortionAmount*this.MilkRicePortion;

  if(this.Duration>5){
    
    this.ExtendedHourCharge=(this.Duration-5)*50000;
    
  }
  else{
    this.ExtendedHourCharge=0;
  }
  this.Budget=this.menuCharge+this.ExtendedHourCharge+this.ScreenCharge+this.TiffanyChairsCharge+this.MilkRicePortionCharge+this.Draping+this.Champagne+this.DryIce+this.MilkPlatter;

  this.ShowBudget=+this.Budget;

  console.log(this.Budget);
}
else{
  alert("Please select your menu and enter the capacity first");
}
}
// end of calculating and displaying rough budget


clearRoughBudget(){
  this.Budget=0;
  this.eventPlanForm.reset();
}


  ngOnInit() {
  }

}
