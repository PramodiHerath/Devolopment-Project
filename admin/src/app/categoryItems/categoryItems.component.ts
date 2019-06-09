import { ItemsService } from './../services/items.service';
import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoryItems',
  templateUrl: './categoryItems.component.html',
  styleUrls: ['./categoryItems.component.css']
})
export class CategoryItemsComponent implements OnInit {
  categoryItems;
  catergoryId;

  Item:any;

  add:boolean;
  delete:boolean;

  addItemForm = new FormGroup({
  itemName: new FormControl('',Validators.required),
  categoryName: new FormControl('')
  }
  )

  constructor(private route:ActivatedRoute,private service:CategoriesService, private itemService:ItemsService) { }

  get name(){
    return this.addItemForm.get('name');
  }

  ngOnInit() {
    this.viewItems();
  }

  viewItems(){
    this.route.paramMap
    .subscribe(params=>{
      this.catergoryId=params.get('categoryId');
      console.log(this.catergoryId);
      this.service.getCategoryItems(this.catergoryId)
      .subscribe(
        response=>{
          console.log(response[0].categoryId.name);
           this.categoryItems=response;
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      })
    })
  }

  addItem(){
    this.bringAddItem();
    this.addItemForm.patchValue({categoryName:this.categoryItems[0].categoryId.name});

    this.Item=Object.assign({},this.addItemForm.value);
    console.log(this.Item);
    this.itemService.postItems(this.Item)
    .subscribe(
      response=>{
      this.categoryItems.push(response);
      alert('succesfully added')
      console.log(response);
      this.addItemForm.reset();
      this.viewItems();   
  },
      error=>{
      alert('An unexpected error occurred.');
      console.log(error);
  }) 
 }


  deleteItem(item,i){
    this.bringDeleteItem();
     this.itemService.deleteItem(item._id)
     .subscribe(
       response=>{
       console.log(response)
       this.categoryItems.splice(i,1);
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

bringDeleteItem(){

  this.delete=true;
  this.add=false;

}

bringAddItem(){
  
  this.delete=false;
  this.add=true;
  

}

}
