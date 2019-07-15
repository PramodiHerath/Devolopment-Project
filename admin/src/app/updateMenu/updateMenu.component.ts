import { ActivatedRoute } from '@angular/router';
import { CategoryItemsService } from './../services/categoryItems.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuItemsService } from '../services/menuItems.service';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-updateMenu',
  templateUrl: './updateMenu.component.html',
  styleUrls: ['./updateMenu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  constructor(private categoryItemsService:CategoryItemsService,private route:ActivatedRoute,private menuItemService:MenuItemsService,private menuService:MenuService) { }

  ngOnInit() {
    this.getCategoryItems();
    this.bringMenu();
  }


  updateMenuForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    item: new FormControl(''),
    choice:new FormControl(''),
    // image:new FormControl(''),
  }
  )

  categories:any;
  items=[];
  categoryList=[];
  menu:any;
  choiceOf=[];



menuId:any;
selectedMenu:any;
menuPrice:any;
menuItems:any;
clicked:boolean=false;
updatingMenu:any;


bringMenu(){
  this.route.paramMap
  .subscribe(params=>{
    this.menuId=params.get('menuId');
    console.log(this.menuId);
    
    this.menuService.getMenu(this.menuId)
    .subscribe(
      response=>{
        
         this.menu=response;
         console.log(this.menu.menuName);
         this.updateMenuForm.setValue({
           name:this.menu.menuName,
           price:this.menu.menuPrice,
           item:'',
           choice:''
           
         })
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })
  })

}





  getCategoryItems(){
    this.categoryItemsService.getCategoryItems()
    .subscribe(
      response=>{
      this.categories=response;
      console.log(this.categories);

      console.log(this.categories[0].itemsList[0]);


      for(let i=0;i<this.categories.length;i++){
        let category={
          categoryName:this.categories[i].categoryName,
          selectedItemsList:[],
          choiceof:0
       } 
        this.categoryList.push(category);
      }
      console.log(this.categoryList);
    },
      error=>{
      alert('An unexpected error occurred.');
      console.log(error);
    })
}









update(){

}

}
