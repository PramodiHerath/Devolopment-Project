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

  imagePreview;

  categories:any;
  items=[];
  categoryList=[];
  Menu:any;
  choiceOf=[];

  createMenuForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    item: new FormControl(''),
    choice:new FormControl(''),
    image:new FormControl(''),
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
    console.log(this.categoryList);
    this.categoryList.forEach((category)=>{
      let choice={
        category:category.categoryName,
        noOfChoice:category.choiceof
      }
      this.choiceOf.push(choice);
    })
    this.createMenuForm.patchValue({choice:this.choiceOf}); 
    this.createMenuForm.patchValue({item:this.items});
    this.Menu=Object.assign({},this.createMenuForm.value);
   

    // const menuData=new FormData();

    // menuData.append("name",this.createMenuForm.value.name);
    // menuData.append("price",this.createMenuForm.value.price);
    // menuData.append("item",this.createMenuForm.value.item);
    // menuData.append("choice",this.createMenuForm.value.choice);
    // menuData.append("image",this.createMenuForm.value.image);
    // console.log(menuData);
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


  // onImagePicked(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.createMenuForm.patchValue({ image: file });
  //   this.createMenuForm.get("image").updateValueAndValidity();
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result;
  //   };
  //   reader.readAsDataURL(file);
  // }

}
