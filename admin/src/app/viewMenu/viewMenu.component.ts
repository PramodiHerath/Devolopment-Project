import { MenuService } from './../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-viewMenu',
  templateUrl: './viewMenu.component.html',
  styleUrls: ['./viewMenu.component.css']
})
export class ViewMenuComponent implements OnInit {
menus:any;
  constructor(private service:MenuService,private router:Router) {
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
  });
}


onItemView(menu){
  console.log(menu.name);
  this.router.navigate(['/viewMenuItems',menu.name]);
   }

bringcreateMenu(){
    this.router.navigate(['/createMenu']);
   }
   

  ngOnInit() {
  }

}
