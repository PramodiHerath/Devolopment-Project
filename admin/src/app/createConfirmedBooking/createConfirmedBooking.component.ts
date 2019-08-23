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
import * as jspdf from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'createConfirmedBooking',
  templateUrl: './createConfirmedBooking.component.html',
  styleUrls: ['./createConfirmedBooking.component.css']
})
export class CreateConfirmedBookingComponent implements OnInit {

  //To get details from halldateselection component
  static selectedHall;
  static selectedDate;
  static selectedTime;

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
  categories=[];
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
    keyMoney:new FormControl('',Validators.required),
    totalCharge:new FormControl('',Validators.required)
  }
  )

  constructor(private router: Router,private serviceService:ServiceService
    ,private hallService:HallsService,private menuService:MenuService,
    private menuItemService:MenuItemsService,private clientService:ClientService,
    private paymentService:PaymentService,private bookingService:BookingService) { }

  ngOnInit() {
    // this.bringHalls();
    this.viewMenus();
    this.loadClients();
    this.viewServices();
    // console.log(CreateConfirmedBookingComponent.selectedDate);
  
    this.confirmedHall=CreateConfirmedBookingComponent.selectedHall;
    this.confirmedDate=new Date(CreateConfirmedBookingComponent.selectedDate).toDateString();
    this.confirmedTime=CreateConfirmedBookingComponent.selectedTime;
   
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
    console.log(menuCatergory);
    if(event.checked){
      menuCatergory.selectedItems++;
      this.items.push(catItem.name);
      this.categories.push(menuCatergory.categoryName);
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
      this.categories.forEach((category)=>{
        if(category==menuCatergory.categoryName){
          let index=this.items.indexOf(category);
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
    // console.log(this.selectedServices);
   }

   calculateMenuCharges(){
    this.menuItems.forEach(category => {
      this.additionalMenuPrice+=category.additionalCharges;
     });
     console.log(this.additionalMenuPrice);
    //  console.log(this.menuPrice);
     this.totalMenuPrice=this.menuPrice+this.additionalMenuPrice;
    //  console.log(this.totalMenuPrice);
     this.totalMenuCharge=this.totalMenuPrice*this.bookingForm.value.capacity;
    //  console.log(this.totalMenuCharge);
   }

   calculateServiceCharges(){
    this.selectedServices.forEach(service => {
          if(service.amount){
            // console.log(service.quantity);
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
        //  console.log(this.serviceCharges);
     }

   calculateTotalBookingCharge(){
    this.totalBookingCharge=this.totalMenuCharge+this.serviceCharges;
   }

   showInvoice(){
    console.log(this.selectedServices);
     this.calculateMenuCharges();
     this.calculateServiceCharges();
     this.calculateTotalBookingCharge();
    this.showSummary=true;
   
   }

  confirmation(){
    //commented partp
    // if(this.amountpaying==25000){
    //   this.makePayment();
    // }
    // else if(this.amountpaying<25000){
      
    //     if (confirm("Key Money Payement is less than Rs. 25000!")) {
    //     this.makePayment();
    //   } else {
        
    //   }
    // }
    // else if(this.amountpaying>25000){
    //   if (confirm("Key Money Payement is greater than Rs. 25000!")) {
    //     this.makePayment();
    //   } else {
        
    //   }
    // }


    this.generateInvoice();

  }


   makePayment(){
     let payment={
      paymentType:this.paymentType,
       amount:this.amountpaying,
       date:new Date(),
      clientId:this.bookingForm.value.clientId

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
    this.bookingForm.patchValue({paymentId:this.clientPayments});
    this.bookingForm.patchValue({hall:CreateConfirmedBookingComponent.selectedHall});
    this.bookingForm.patchValue({date:CreateConfirmedBookingComponent.selectedDate});
    this.bookingForm.patchValue({time:CreateConfirmedBookingComponent.selectedTime});
    this.bookingForm.patchValue({totalBookingCharge:this.totalBookingCharge});
    this.bookingForm.patchValue({keyMoney:this.amountpaying});
    this.bookingForm.patchValue({damageCharge:0});
    this.bookingForm.patchValue({durationCharge:0});
    this.bookingForm.patchValue({totalCharge:this.totalBookingCharge});

    
    this.booking=Object.assign({},this.bookingForm.value);
    console.log(this.booking);
    this.bookingService.postConfirmedBooking(this.booking)
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

  invoiceItemData=[];
  rowSpanData=[];
  cumalativeRowSpanData=[];
  catergoriesAndItemsSorted=[];


  generateInvoice(){
    let catergoryRawSpanCumalitive=0;
    for(let i=0;i<this.categories.length;i++){
      let catergoryRawSpan=0;
      let categoryName=this.categories[i];
      let itemName=this.items[i];
      let categoryAndItem={
        category:categoryName,
        item:itemName
      };
      this.catergoriesAndItemsSorted.push(categoryAndItem);
      catergoryRawSpanCumalitive++;
      catergoryRawSpan++;
      for(let j=i+1;j<this.categories.length;j++){
        if(categoryName==this.categories[j]){
          let categoryAndItem={
            category:categoryName,
            item:this.items[j]
          };
          this.catergoriesAndItemsSorted.push(categoryAndItem);
          catergoryRawSpanCumalitive++;
          catergoryRawSpan++;
          this.categories.splice(j,1);
          this.items.splice(j,1);
          j--
        }
      }
      this.rowSpanData.push(catergoryRawSpan);
      this.cumalativeRowSpanData.push(catergoryRawSpanCumalitive);
    }

   for(let i=0;i<this.catergoriesAndItemsSorted.length;i++){
    let categoryItem=[];
    categoryItem.push(this.catergoriesAndItemsSorted[i].category);
    categoryItem.push(this.catergoriesAndItemsSorted[i].item);
    this.invoiceItemData.push(categoryItem);
   }
   console.log(this.catergoriesAndItemsSorted);
   console.log(this.rowSpanData);
   console.log(this.cumalativeRowSpanData);

  //  this.invoiceItemData= this.invoiceItemData.map(row => Object.keys(row).map(key => row[key]));
           
  //  let rowSpanNumber=0;

  //  for (var i = 0; i < this.invoiceItemData.length; i++) {
  //          let row = this.invoiceItemData[i];
  //          if (rowSpanNumber== 0) {
  //            console.log(i);
  //              row.unshift({rowSpan: this.rowSpanData[0], content: this.invoiceItemData[i].category, styles: {valign: 'middle', halign: 'left'}});
  //              rowSpanNumber++;
  //          }
  //          if (this.cumalativeRowSpanData[rowSpanNumber-1]== i) {
  //           console.log(i);
  //             row.unshift({rowSpan: this.rowSpanData[0], content: this.invoiceItemData[i].category, styles: {valign: 'middle', halign: 'left'}});
  //             rowSpanNumber++;
  //         }
  //    }

   
    
    let client=this.clients.find(client=>client._id==this.bookingForm.value.clientId);
    console.log(client)
    let doc=new jspdf();
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.text("Hotel Royal Park",80,25);
    doc.setFontSize(15);
    doc.text(client.name,14,38);
    doc.text(client.telephoneNumber.toString(),14,45);
    doc.text(new Date().toDateString(),14,52);
    doc.text("Hotel Royal Park",130,38);
    doc.text("Kiribathgoda",130,45);
    doc.text("Tel-0112829829",130,52);

    doc.text("Event Date :"+this.confirmedDate,14,62);
    if(this.confirmedTime=='wholeDay'){
      doc.text("Event Time :"+this.bookingForm.value.eventType,14,69);
    }
    else{
      doc.text("Event Time :"+this.confirmedTime,14,69);
    }
    doc.text("Hall:"+this.confirmedHall.name,14,76);

    let head=[['Category','Items']];

    doc.autoTable({
      head: head,
      body: this.invoiceItemData,
      margin: {top: 85},
      
      headStyles: {
        fontSize: 12
    },
    footStyles: {
        fontSize: 15
    },
    bodyStyles: {
      fontSize: 9,
    },
    didDrawPage: function (data) {
      
      
  }, 
  });
  doc.text("Services ",14,doc.autoTable.previous.finalY+10);
  doc.setFontSize(13);
  for(let i=0;i<this.selectedServices.length;i++){
    if(this.selectedServices[i].amount){
      doc.text(this.selectedServices[i].name+"-"+this.selectedServices[i].quantity,14,doc.autoTable.previous.finalY+10+(i+1)*7);
    }
    else{
      doc.text(this.selectedServices[i].name,14,doc.autoTable.previous.finalY+10+(i+1)*7);
    }
  }

    doc.save('Invoice.pdf');
    
  }
 
}
