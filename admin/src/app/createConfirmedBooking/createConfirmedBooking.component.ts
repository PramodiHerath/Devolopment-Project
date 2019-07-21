import { ClientService } from './../services/client.service';
import { MenuItemsService } from './../services/menuItems.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HallsService } from '../services/halls.service';
import { MenuService } from '../services/menu.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'createConfirmedBooking',
  templateUrl: './createConfirmedBooking.component.html',
  styleUrls: ['./createConfirmedBooking.component.css']
})
export class CreateConfirmedBookingComponent implements OnInit {

  eventTypes:string[]=['Wedding','Birthday Party','other'];
  halls;
  menus:any;
  selectedMenu:any;
  menuPrice:number;
  clicked:boolean;
  menuItems:any;
  additionalMenuCharges=0;
  clients:any;
  displayServices:any;
  selectedServices=[];
  serviceClicked:any;



  bookingForm = new FormGroup({
    hall: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    dayNight:new FormControl('',Validators.required),
    duration:new FormControl('',Validators.required),
    type:new FormControl('',Validators.required),
    capacity:new FormControl('',Validators.required),
    remarks:new FormControl('',Validators.required),
    clientId:new FormControl('',Validators.required)
  }
  )

  constructor(private serviceService:ServiceService,private hallService:HallsService,private menuService:MenuService,private menuItemService:MenuItemsService,private clientService:ClientService) { }

  ngOnInit() {
    this.bringHalls();
    this.viewMenus();
    this.loadClients();
    this.viewServices();
    }

  loadClients(){
    this.clientService.getClients()
    .subscribe(
      response=>{
        console.log(response);
        this.clients=response;
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 
  } 
  bringHalls(){
    this.hallService.getAllHalls()
    .subscribe(
      response=>{
        console.log(response);
        this.halls=response;
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })  

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
    })  
   }

   selectMenu(menu){
     
    this.selectedMenu=menu.name;
    this.menuPrice=menu.price;
     this.clicked=true;
     this.menuItemService.getMenuItems(menu._id)
     .subscribe(
       response=>{
         console.log(response);
          this.menuItems=response;
          this.menuItems.forEach(element => {
           element.selectedItems=0;
           element.additionalCharges=0;
          });
          
          
     },
       error=>{
         alert('An unexpected error occurred.');
         console.log(error);
     })  

  }

  chooseItem(event,menuCatergory){
    if(event.checked){
      menuCatergory.selectedItems++;
      if(menuCatergory.selectedItems>menuCatergory.choiceOf){
        menuCatergory.additionalCharges+=menuCatergory.categoryPrice;
        this.additionalMenuCharges+=menuCatergory.categoryPrice;
      }
    }
    else if(!event.checked){
      if(menuCatergory.selectedItems>menuCatergory.choiceOf){
        menuCatergory.additionalCharges-=menuCatergory.categoryPrice
        this.additionalMenuCharges-=menuCatergory.categoryPrice;
      }
      menuCatergory.selectedItems--;
    }
    console.log(this.additionalMenuCharges);
   }

   searchClient(event){

    console.log(this.bookingForm.get('clientId').value);
    if((event.keyCode==40)||(event.keyCode==38)){
      return 
    }
    this.clientService.searchClient(this.bookingForm.get('clientId').value)
    .subscribe(response=>{
      this.clients=response;
    },(error:Response)=>{
    })
  }

  viewServices(){
    this.serviceService.getAllServices()
    .subscribe(
      response=>{
               
        this.displayServices=response;
        this.displayServices.forEach((service) => {
          service.isSelected=false;
        });
        // console.log(this.displayServices); 
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })  
   }
   chooseService(event,service){
    if(event.checked){
      service.isSelected=true;
      this.selectedServices.push(service);
    }
    else if(!event.checked){
      service.isSelected=false;
      this.selectedServices.forEach((selectedService)=>{
        if(service.name==service.name){
          let index=this.selectedServices.indexOf(selectedService);
          if(index>-1){
            this.selectedServices.splice(index,1);
          }
        }
      })
    }
    // console.log(this.selectedServices);
   }
   
  click(){
    console.log(this.selectedServices);
  }

}
