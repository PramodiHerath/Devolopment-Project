import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuService } from '../serviceshttp/menu.service';
@Component({
  selector: 'menues',
  templateUrl: './menues.component.html',
  styleUrls: ['./menues.component.css']
})
export class MenuesComponent implements OnInit {

  menu1="silverMenu";
  men2="goldMenu";
  menu3="platinumMenu";


  pic1='/assets/images/royalRose.jpg';
  pic2='/assets/images/pic2.jpg';
  pic3='/assets/images/pic3.jpg';

  

  menus:any;

  royalSilver= '/assets/images/royalSilver.jpg';
  royalGold= '/assets/images/royalGold.jpg';
  royalPlatinum= '/assets/images/royalPlatinum.jpg';
  
  constructor(private router: Router, private service: MenuService) {
      this.viewMenus();
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

 
  bringTable(){
    this.router.navigate(['/planEvent'])
  }
  bringRoyalSilver(id){
    console.log(id);
      this.router.navigate(['/package',id]);
  }
  ngOnInit() {

   
  }

}
