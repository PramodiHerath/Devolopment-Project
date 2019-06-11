import { Router } from '@angular/router';
import { MenuService } from './../services/menu.service';
import { CategoryItemsService } from './../services/categoryItems.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainMenus',
  templateUrl: './mainMenus.component.html',
  styleUrls: ['./mainMenus.component.css']
})
export class MainMenusComponent implements OnInit {

  categories:any;
  items=[];
  categoryList=[];
  Menu:any;

  createMenuForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    item: new FormControl('')
  }
  )

  constructor(private categoryItemsService:CategoryItemsService,private menuService:MenuService,private router:Router) { }

  ngOnInit() {
    this.getCategoryItems();
  }

  getCategoryItems(){
      this.categoryItemsService.getCategoryItems()
      .subscribe(
        response=>{
        this.categories=response;
        console.log(this.categories);

        for(let i=0;i<this.categories.length;i++){
          let category={
            categoryName:this.categories[i].categoryName,
            selectedItemsList:[]
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

  
  itemSelect(event,item){
    if(event.checked){

      this.categoryList.forEach((category)=>{
        if(category.categoryName==item.categoryName){
          category.selectedItemsList.push(item);
          this.items.push(item);
          console.log(this.items);
        }
      })
    }
    else if(!event.checked){
      // let index=this.
      this.categoryList.forEach((category)=>{
        if(category.categoryName==item.categoryName){
          let index=category.selectedItemsList.indexOf(item);
          if(index>-1){
            category.selectedItemsList.splice(index,1);
      
          }

          let indexOfItem=this.items.indexOf(item);
          if(indexOfItem>-1){
            this.items.splice(indexOfItem,1);
          }
          console.log(this.items);
        }
      })
    }
  }

  create(){
    this.createMenuForm.patchValue({item:this.items});
    this.Menu=Object.assign({},this.createMenuForm.value);
    console.log(this.Menu);
    this.menuService.addMenus(this.Menu)
    .subscribe(
      response=>{
      alert('succesfully added');
      console.log(response);
      this.createMenuForm.reset();
      this.router.navigate(['/viewMenu']);
  },
      error=>{
      alert('An unexpected error occurred.');
      console.log(error);
  }) 
  }
}
