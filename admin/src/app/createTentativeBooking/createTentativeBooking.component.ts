import { Router } from '@angular/router';
import { MenuService } from './../services/menu.service';
import { HallsService } from './../services/halls.service';


import { ClientService } from './../services/client.service';
import { AuthService } from './../services/auth.service';
import { BookingService } from './../services/booking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { MenuItemsService } from '../services/menuItems.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'createTentativeBooking',
  templateUrl: './createTentativeBooking.component.html',
  styleUrls: ['./createTentativeBooking.component.css']
})
export class CreateTentativeBookingComponent implements OnInit {
  isAdmin=this.authService.decodedToken.isAdmin;
  tentativeBookings:any;

  //show confirm and delete buttons
  confirm:boolean;
  delete:boolean;
  ShowConfirmationForm:boolean;

  

   //hall date and time saved to backend
   confirmedHall;
   confirmedDate;
   confirmedTime;

   
  eventTypes:string[]=[' Day Wedding','Night Wedding','Other'];
  halls;
  menus:any;
  selectedMenu:any;
  menuPrice:number;
  clicked:boolean;
  showSummary:boolean;
  tentativeId:any;
  tentativeClient:any;
 
  menuItems:any;
  additionalMenuCharges=0;
  clients:any;
  displayServices:any;
  selectedServices=[];
  serviceClicked:any;
  servicesAmountTrue=[];
  servicesAmountFalse=[];
  payment:any;
  client:any;
  clientPayments=[];
  items=[];
  booking:object;
  additionalMenuPrice=0;
  totalMenuPrice:number;
  totalBookingCharge=0;
  amountpaying:any;
  paymentType:any;
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
    services:new FormControl('',Validators.required),
    totalBookingCharge:new FormControl('',Validators.required),
    damageCharge:new FormControl('',Validators.required),
    durationCharge:new FormControl('',Validators.required),
    totalCharge:new FormControl('',Validators.required)
  }
  )
  
  constructor( private bookingService: BookingService,private authService:AuthService,
    private serviceService:ServiceService,private router: Router,
    private hallService:HallsService,private menuService:MenuService,
    private menuItemService:MenuItemsService,private clientService:ClientService,
    private paymentService:PaymentService) { }

  ngOnInit() {
    this.getAllTentativeBookings();
    this.viewMenus();
    this.loadClients();
    this.viewServices();
  }

  getAllTentativeBookings(){
    this.bookingService.getTentativeBookings()
    .subscribe(
      response=>{
        console.log(response);
        this.tentativeBookings=response;

        this.tentativeBookings.forEach(booking => {
          booking.date=new Date(booking.date).toDateString();
        });
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 
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

 calculateMenuCharges(){
  this.menuItems.forEach(category => {
    this.additionalMenuPrice+=category.additionalCharges;
   });
   console.log(this.additionalMenuPrice);
   console.log(this.menuPrice);
   this.totalMenuPrice=this.menuPrice+this.additionalMenuPrice;
   console.log(this.totalMenuPrice);
   this.totalMenuCharge=this.totalMenuPrice*this.bookingForm.value.capacity;
   console.log(this.totalMenuCharge);
 }

 calculateServiceCharges(){
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
      

 }

 calculateTotalBookingCharge(){
  this.totalBookingCharge=this.totalMenuCharge+this.serviceCharges;
 }

 showInvoice(){
   this.calculateMenuCharges();
   this.calculateServiceCharges();
   this.calculateTotalBookingCharge();
  this.showSummary=true;
 }

 makePayment(){

  
   let payment={
    paymentType:this.paymentType,
     amount:this.amountpaying,
     date:new Date(),
    clientId:this.tentativeClient

   }
   console.log(payment);
   this.paymentService.makePayment(payment)
   .subscribe(response=>{
     this.payment=response;
     console.log(response);
     this.updateBookingTable(this.payment._id);
   },
    (error:Response)=>{

   })
 }

 updateBookingTable(paymentId){

  this.clientPayments.push(paymentId);

  // console.log(this.selectedServices);
  // console.log(data.clientId);
  this.client=this.bookingForm.value.clientId;
  // this.paymentsArr(this.client);
  // console.log(this.items);
 if(this.confirmedTime!='wholeDay'){
  this.bookingForm.patchValue({eventType:'Other'});
 }
  this.bookingForm.patchValue({services:this.selectedServices});
  this.bookingForm.patchValue({menu:{
    _id:this.menuId,
    name:this.selectedMenu,
    price:this.totalMenuPrice,
    item:this.items
  }});
  this.bookingForm.patchValue({status:"confirmed"});
  this.bookingForm.patchValue({clientId:this.tentativeClient});
  this.bookingForm.patchValue({paymentId:this.clientPayments});
  this.bookingForm.patchValue({hall:this.confirmedHall._id});
  this.bookingForm.patchValue({date:this.confirmedDate});
  this.bookingForm.patchValue({time:this.confirmedTime});
  this.bookingForm.patchValue({totalBookingCharge:this.totalBookingCharge});
  this.bookingForm.patchValue({damageCharge:0});
  this.bookingForm.patchValue({durationCharge:0});
  this.bookingForm.patchValue({totalCharge:this.totalBookingCharge});

  
  this.booking=Object.assign({},this.bookingForm.value);
  console.log(this.booking);
  this.bookingService.confirmTentativeBooking(this.tentativeId,this.booking)
  .subscribe(
    response=>{
    console.log(response);
    this.router.navigate(['/home']);
    
  
    // this.bookingForm.reset();   
  },
    error=>{
    console.log(error);
  }) 


}
 


  confirmBooking(booking){
    this.tentativeId=booking._id;
    this.tentativeClient=booking.clientId;
    this.ShowConfirmationForm=true;
    this.confirmedDate=booking.date;
    this.confirmedHall=booking.hallId;
    this.confirmedTime=booking.time;

  }

  deleteBooking(booking,i){
  
  this.bookingService.deleteTativeBooking(booking._id)
    .subscribe(
      response=>{
      console.log(response)
      this.tentativeBookings.splice(i,1) 
      alert('succesfully deleted')
   },
      (error: Response)=>{
        if(error.status===404)
        alert('This Tentative Bookings is Already Deleted');
        else{
          alert('An unexpected error occurred.');
          console.log(error);
        }
     
  })
  }

  


  bringConfirmBooking(){
    this.confirm=true;
    this.delete=false;
  

  }

  bringDeleteBooking(){
    this.confirm=false;
    this.delete=true;
    

  }

}
