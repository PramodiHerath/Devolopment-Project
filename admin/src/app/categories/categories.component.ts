import { AuthService } from './../services/auth.service';
import { CategoriesService } from './../services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  isAdmin=this.authService.decodedToken.isAdmin;
categories : any  ;
newCategory:object;
changedCategory:object;

add:boolean;
update:boolean;
delete:boolean;
view:boolean;
updateForm:boolean;
updatingCategory:String;
updatingId:any;


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

  constructor(private service:CategoriesService,private router:Router, private authService:AuthService) {
   this.viewCategories();
   
   }

   viewCategories(){
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
        alert('succesfully added')
        console.log(response);
        this.addCategoryForm.reset();   
    },
        error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 
   }



   updateCategory(){
    this.bringUpdateCategory();
    this.changedCategory=Object.assign({},this.updateCategoryForm.value);
    
    console.log(this.changedCategory)
    console.log(this.updatingId)
      this.service.updateCategory(this.changedCategory,this.updatingId)
      .subscribe(
        response=>{
        console.log(response);
        alert('succesfully updated')
        this.viewCategories();
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

   deleteCategory(category,i){
     this.bringDeleteCategory();
      this.service.deleteCategory(category._id)
      .subscribe(
        response=>{
        console.log(response)
        this.categories.splice(i,1) 
        alert('succesfully deleted')
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

   onItemView(category){
      console.log(category._id);
      this.router.navigate(['/categoryItem',category._id]);
       }

   bringUpdateForm(category){
      
      this.update=true;
      console.log(category.name);
      this.updatingCategory=category.name;
      this.updatingId=category._id;
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
