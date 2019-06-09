import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  champagne='/assets/images/services.jpg';
  dryIce='/assets/images/services/dryIce.jpg';


   drapingPrice:number=120000;
   ChampagnePrice:number=2000;
   dryIcePrice:number=3500;
   milkRicePlatterPrice:number=2000;
   decoPrice:number=25000;
   screenPrice:number=6000;
   tiffanyChairsPrice:number=200;
   milkRicePortionPrice:number=250;


  constructor() { }
 


  ngOnInit() {
  }
  

}
