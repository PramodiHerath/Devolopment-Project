import { ActivatedRoute, Router } from '@angular/router';
import { CategoryItemsService } from './../services/categoryItems.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuItemsService } from '../services/menuItems.service';
import { MenuService } from '../services/menu.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-updateMenu',
  templateUrl: './updateMenu.component.html',
  styleUrls: ['./updateMenu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  constructor(private categoryItemsService:CategoryItemsService,
    private route:ActivatedRoute,private router:Router,
    private menuItemService:MenuItemsService,private menuService:MenuService,private authService:AuthService) { }

  ngOnInit() {
    this.getCategoryItems();
    this.bringMenu();
    
  }

  isAdmin=this.authService.decodedToken.isAdmin;
  updateMenuForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    item: new FormControl(''),
    choice:new FormControl(''),
    menuImagePath:new FormControl(''),
    image:new FormControl(''),
  }
  )
  
  imagePreview;
  categories:any;
  items=[];
  categoryList=[];
  menu:any;
  choiceOf=[];
  preSelected:boolean;
  preSelectedCategoryItems=[];
  allowUpdate:boolean;
  image:any;
  Menu;



menuId:any;
selectedMenu:any;
menuPrice:any;
menuItems:any;
clicked:boolean=false;
updatingMenu:any;
imageChanged:boolean=false;


bringMenu(){
  this.route.paramMap
  .subscribe(params=>{
    this.menuId=params.get('menuId');
    console.log(this.menuId);
    
    this.menuService.getMenu(this.menuId)
    .subscribe(
      response=>{
        
         this.menu=response;
         this.preSelectedCategoryItems=this.menu.menuCategoryItems;
         console.log(this.menu);
         console.log(this.menu.menuName);
         this.imagePreview=this.menu.menuImagePath;
         this.updateMenuForm.setValue({
           name:this.menu.menuName,
           price:this.menu.menuPrice,
           menuImagePath:this.menu.menuImagePath,
           image:'',
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

selected(){
  this.allowUpdate=true;

  // for(let i=0;i<this.preSelectedCategoryItems.length;i++){
  //   for(let j=0;j<this.categories.length;j++){
  //     if(this.preSelectedCategoryItems[i].categoryName==this.categories[j].categoryName){
  //       for(let p=0;p<this.preSelectedCategoryItems[i].itemsList.length;p++){
          
  //         for(let q=0;q<this.categories[j].itemsList.length;q++){
          
  //           if(this.preSelectedCategoryItems[i].itemsList[p]==this.categories[j].itemsList[q]){
  //             this.categories.itemsList[q].preSelected=true;
  //             console.log(this.categories.itemsList[q]);
  //             break;

  //           }
  //         }
  //       }
  //     }
  //   }
    
  // }

   this.preSelectedCategoryItems.forEach((category)=>{
    
       this.categories.forEach((cat)=>{
       if(category.categoryName==cat.categoryName){
        this.categoryList.forEach((categoryL)=>{
          if(categoryL.categoryName==category.categoryName){
            categoryL.choiceof=category.choiceOf;
          }
        })

        category.itemsList.forEach(item => {

          try{
            cat.itemsList.forEach(element => {
             if(item.name==element.name){
               element.preSelected=true;
               console.log(element);
               this.categoryList.forEach((category)=>{
                if(category.categoryName==element.categoryName){
                  category.selectedItemsList.push(element);
                  this.items.push(element);
                  console.log(this.items);
                }
              })
              console.log(this.categoryList);
               throw "break";
             }
            
           }) 
          }catch (e) { };
           
         });
       
         
       }
    
   })
 
     
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
        console.log(index);
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

//  






update(){
  this.items.forEach(element => {
    delete element.preSelected;
  });
console.log(this.items);

console.log(this.categoryList);
    this.categoryList.forEach((category)=>{
      let choice={
        category:category.categoryName,
        noOfChoice:category.choiceof
      }
      this.choiceOf.push(choice);
    })
    this.updateMenuForm.patchValue({choice:this.choiceOf}); 
    this.updateMenuForm.patchValue({item:this.items});
    
  

    console.log("before");

  if(this.imageChanged){
    const menuData=new FormData();

    // menuData.append("name",this.createMenuForm.value.name);
    // menuData.append("price",this.createMenuForm.value.price);
    // menuData.append("item",this.createMenuForm.value.item);
    // menuData.append("choice",this.createMenuForm.value.choice);
    menuData.append("image",this.updateMenuForm.value.image,this.updateMenuForm.value.name);
    menuData.append("title",this.updateMenuForm.value.name);
    this.menuService.addMenuPhoto(menuData)
    .subscribe(
      response=>{
      alert('succesfully added');
      console.log(response);
      this.updateMenuForm.patchValue({menuImagePath:response});
      this.Menu=Object.assign({},this.updateMenuForm.value);

      this.menuService.updateMenu(this.menuId,this.Menu)
      .subscribe(
        response=>{
        alert('succesfully updated');
        console.log(response);
        this.updateMenuForm.reset();
        this.router.navigate(['/viewMenu']);
      },
          error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      }) 
    },
        error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) ;
  }else if(!this.imageChanged){
    this.Menu=Object.assign({},this.updateMenuForm.value);

    this.menuService.updateMenu(this.menuId,this.Menu)
      .subscribe(
        response=>{
        alert('succesfully updated');
        console.log(response);
        this.updateMenuForm.reset();
        this.router.navigate(['/viewMenu']);
      },
          error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      }) 
  }

    // console.log(menuData);
}


onImagePicked(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.image=file;
  this.updateMenuForm.patchValue({ image: file });
  this.updateMenuForm.get("image").updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result;
    this.imageChanged=true;
  };
  reader.readAsDataURL(file);
}

}
