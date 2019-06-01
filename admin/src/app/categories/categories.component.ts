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
categories:any[];
newCategory:object;

add:boolean;
update:boolean;
delete:boolean;


addCategoryForm = new FormGroup({
  name: new FormControl('',Validators.required),
  price: new FormControl('',Validators.required)
}
)

  constructor(private service:CategoriesService) {
   
    this.service.getCategories()
    .subscribe(response=>{
       
        console.log(response);
         this.categories=response;
    })  
   }

   addCategory(data){
      this.newCategory={
        categoryName:data.name,
        categoryPrice:data.price
     }
      this.service.postCategories(this.newCategory)
      .subscribe(response=>{
       this.categories.push(response);
      console.log(response);
      this.addCategoryForm.reset();   
    }) 
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
