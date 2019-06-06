import { CategoriesService } from './../services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories : any  ;
newCategory:object;
changedCategory:object;

add:boolean;
update:boolean;
delete:boolean;
updateForm:boolean;
updatingCategory:String;


addCategoryForm = new FormGroup({
  name: new FormControl('',Validators.required),
  price: new FormControl('',Validators.required)
}
)

updateCategoryForm = new FormGroup({
  newName: new FormControl('',Validators.required),
  newPrice: new FormControl('',Validators.required)
}
)

  constructor(private service:CategoriesService) {
   
    this.service.getAllCategories()
    .subscribe(
      response=>{
        console.log(response);
         this.categories=response;
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })  
   }


   addCategory(data){
      this.newCategory={
        categoryName:data.name,
        categoryPrice:data.price
     }
      this.service.postCategories(this.newCategory)
      .subscribe(
        response=>{
        this.categories.push(response);
        console.log(response);
        this.addCategoryForm.reset();   
    },
        error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 
   }



   updateCategory(data){
    this.bringUpdateCategory();
    this.changedCategory={
      categoryName:data.newName,
      categoryPrice:+data.newPrice
    }
    console.log(this.changedCategory)
      this.service.updateCategory(this.changedCategory)
      .subscribe(
        response=>{
        console.log(response);
        this.updateCategoryForm.reset();
      },
        error=>{
        alert('An unexpected error occurred.');
        console.log(error);
      })

    this.service.getAllCategories()
    .subscribe(response=>{
       
        console.log(response);
         this.categories=response;
    })
    
   }

   deleteCategory(i){
     this.bringDeleteCategory();
      this.service.deleteCategory(this.categories[i].name)
      .subscribe(
        response=>{
        console.log(response)
        this.categories.splice(i,1) 
     },
        (error: Response)=>{
          if(error.status===404)
          alert('This Category is Already Deleted');
          else{
            alert('An unexpected error occurred.');
            console.log(error);
          }
       
    })
     
   }


   bringUpdateForm(i){
      
      this.update=true;
      console.log(this.categories[i].name);
      this.updatingCategory=this.categories[i].name;
   }

   bringAddCategory(){
      this.update=false;
      this.delete=false;
      this.add=true;

   }
   bringUpdateCategory(){
    this.update=true;
    this.delete=false;
    this.add=false;

  }

  bringDeleteCategory(){
    this.update=false;
    this.delete=true;
    this.add=false;

  }


  ngOnInit() {
  }

}
