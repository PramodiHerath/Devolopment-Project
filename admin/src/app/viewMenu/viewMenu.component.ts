import { CategoryItemsService } from './../services/categoryItems.service';
import { MenuItemsService } from './../services/menuItems.service';
import { MenuService } from './../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'admin-viewMenu',
  templateUrl: './viewMenu.component.html',
  styleUrls: ['./viewMenu.component.css']
})
export class ViewMenuComponent implements OnInit {

menus:any;
isAdmin=this.authService.decodedToken.isAdmin;
bringDeleteMenu:boolean=false;



  constructor(private menuService:MenuService,private router:Router,private authService:AuthService,private menuItemService:MenuItemsService,private categoryItemsService:CategoryItemsService) {
    this.viewMenus();
   }


   ngOnInit() {
     
  }


viewMenus(){

this.menuService.getAllMenus()
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
  
  this.router.navigate(['/updateMenu',menu._id]);
    
}
   
bringdeleteMenu(){
  this.bringDeleteMenu=true;
}

deleteMenu(menu,i){
  this.bringDeleteMenu=false;
  this.menuService.deleteMenu(menu._id)
  .subscribe(
    response=>{
    console.log(response)
    this.menus.splice(i,1) 
    alert('succesfully deleted')
 },
    (error: Response)=>{
      if(error.status===404)
      alert('This Menu is Already Deleted');
      else{
        alert('An unexpected error occurred.');
        console.log(error);
      }
   
})
 
 }




bringcreateMenu(){
    this.router.navigate(['/createMenu']);
   }
   

 

}
