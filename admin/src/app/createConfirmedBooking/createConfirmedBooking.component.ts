import { Router } from '@angular/router';
import { ClientService } from './../services/client.service';
import { MenuItemsService } from './../services/menuItems.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HallsService } from '../services/halls.service';
import { MenuService } from '../services/menu.service';
import { ServiceService } from '../services/service.service';
import { PaymentService } from '../services/payment.service';
import { BookingService } from '../services/booking.service';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'createConfirmedBooking',
  templateUrl: './createConfirmedBooking.component.html',
  styleUrls: ['./createConfirmedBooking.component.css']
})
export class CreateConfirmedBookingComponent implements OnInit {

  static selectedHall;
  static selectedDate;
  static selectedTime;
 
  eventTypes:string[]=['Wedding','Whole Day Function','Half Day Function'];
  halls;
  menus:any;
  selectedMenu:any;
  menuPrice:number;
  clicked:boolean;
  showSummary:boolean;
 
  menuItems:any;
  additionalMenuCharges=0;
  clients:any;
  displayServices:any;
  selectedServices=[];
  serviceClicked:any;
  servicesAmountTrue=[];
  servicesAmountFalse=[];
  payments:any;
  client:any;
  clientPayments=[];
  items=[];
  booking:object;
  additionalMenuPrice=0;
  totalMenuPrice:number;
  menuId:any;

  servicePrice:number;
  serviceQuantity:number;
  fullServicePrice=0;
  serviceCharges=0;
  totalMenuCharge=0;



  bookingForm = new FormGroup({
    hall: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    time:new FormControl('',Validators.required),
    eventType:new FormControl('',Validators.required),
    capacity:new FormControl('',Validators.required),
    menu:new FormControl('',Validators.required),
    remarks:new FormControl('',Validators.required),
    clientId:new FormControl('',Validators.required),
    paymentId:new FormControl('',Validators.required),
    services:new FormControl('',Validators.required)
  }
  )

  constructor(private router: Router,private serviceService:ServiceService,private hallService:HallsService,private menuService:MenuService,private menuItemService:MenuItemsService,private clientService:ClientService,private paymentService:PaymentService,private bookingService:BookingService) { }

  ngOnInit() {
    // this.bringHalls();
    this.viewMenus();
    this.loadClients();
    this.viewServices();
    // console.log(CreateConfirmedBookingComponent.selectedDate);
  
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
     this.menuId=menu._id;
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

  chooseItem(event,menuCatergory,catItem){
    console.log(catItem);
    if(event.checked){
      menuCatergory.selectedItems++;
      this.items.push(catItem.name);
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
      this.items.forEach((item)=>{
        if(item==catItem.name){
          let index=this.items.indexOf(item);
          if(index>-1){
            this.items.splice(index,1);
          }
        }
      })

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
        this.displayServices.forEach((service) => {
          if(service.amount===true){
            service.quantity=0;
            this.servicesAmountTrue.push(service);
            // console.log(this.servicesAmountTrue); 
          }
          else if(service.amount===false){
            this.servicesAmountFalse.push(service);
            // console.log(this.servicesAmountFalse); 

          }
        });
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
      console.log(this.selectedServices);
    }
    else if(!event.checked){
      service.isSelected=false;
      this.selectedServices.forEach((selectedService)=>{
        if(service.name==selectedService.name){
          let index=this.selectedServices.indexOf(selectedService);
          if(index>-1){
            this.selectedServices.splice(index,1);
          }
        }
      })
    }
    console.log(this.selectedServices);
   }
   
   updateBookingTable(data){
    // console.log(this.selectedServices);
    // console.log(data.clientId);
    this.client=data.clientId;
    this.paymentsArr(this.client);
    // console.log(this.items);
    this.menuItems.forEach(category => {
      this.additionalMenuPrice+=category.additionalCharges;
     });
     console.log(this.additionalMenuPrice);
     console.log(this.menuPrice);
     this.totalMenuPrice=this.menuPrice+this.additionalMenuPrice;
     console.log(this.totalMenuPrice);
    this.bookingForm.patchValue({services:this.selectedServices});
    this.bookingForm.patchValue({menu:{
      _id:this.menuId,
      name:this.selectedMenu,
      price:this.totalMenuPrice,
      item:this.items
    }});
    this.bookingForm.patchValue({status:"confirmed"});
    this.bookingForm.patchValue({paymentId:this.clientPayments});
    this.bookingForm.patchValue({hall:CreateConfirmedBookingComponent.selectedHall});
    this.bookingForm.patchValue({date:CreateConfirmedBookingComponent.selectedDate});
    this.bookingForm.patchValue({time:CreateConfirmedBookingComponent.selectedTime});
    this.booking=Object.assign({},this.bookingForm.value);
    // console.log(this.booking);
    this.bookingService.postConfirmedBooking(this.booking)
    .subscribe(
      response=>{
      console.log(response);
      // this.router.navigate(['/home']);
      this.selectedServices.forEach(service => {
        if(service.amount){
          console.log(service.quantity);
          this.serviceQuantity=service.quantity;
          this.servicePrice=service.price;
          this. fullServicePrice=this.serviceQuantity*this.servicePrice;
          this.serviceCharges+=this.fullServicePrice;
        }
        if(!service.amount){
        this.servicePrice=service.price;
        this.serviceCharges+=this.servicePrice;
      }
       });
       console.log(this.serviceCharges);
       this.totalMenuCharge=this.totalMenuPrice*this.bookingForm.value.capacity;
       console.log(this.totalMenuCharge);
      this.showSummary=true;
      // this.bookingForm.reset();   
    },
      error=>{
      console.log(error);
    }) 


  }

  paymentsArr(client){
    this.paymentService.getPayments()
    .subscribe(
      response=>{
        console.log(response);
        this.payments=response;
        this.payments.forEach((payment) => {
          if(payment.clientId==this.client){
            this.clientPayments.push(payment);
          }
        });
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 


  }

}
