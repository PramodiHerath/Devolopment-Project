

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../serviceshttp/service.service';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  champagne='/assets/images/services.jpg';
  dryIce='/assets/images/services/dryIce.jpg';
  services:any=[];


   drapingPrice:number;
   ChampagnePrice:number;
   dryIcePrice:number;
   milkRicePlatterPrice:number;
   decoPrice:number;
   screenPrice:number;
   tiffanyChairsPrice:number;
   milkRicePortionPrice:number;


  constructor(private service: ServiceService) { 
    this.viewServices();
    
  }
  
 viewServices(){
  this.service.getAllServices()
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


  ngOnInit() {
  }
  

}
