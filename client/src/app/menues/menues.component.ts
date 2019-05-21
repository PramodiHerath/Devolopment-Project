import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'menues',
  templateUrl: './menues.component.html',
  styleUrls: ['./menues.component.css']
})
export class MenuesComponent implements OnInit {

  
  pic1='/assets/images/royalRose.jpg';
  pic2='/assets/images/pic2.jpg';
  pic3='/assets/images/pic3.jpg';

  silverPrice=3250;
  goldPrice=4340;
  platinumPrice=5190;

  royalSilver= '/assets/images/royalSilver.jpg';
  royalGold= '/assets/images/royalGold.jpg';
  royalPlatinum= '/assets/images/royalPlatinum.jpg';
  
  constructor(private router: Router) {

   }
 
  bringTable(){
    this.router.navigate(['/planEvent'])
  }
  ngOnInit() {

   
  }

}
