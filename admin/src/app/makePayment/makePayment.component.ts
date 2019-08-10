import { Router } from '@angular/router';
import { BookingService } from './../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'makePayment',
  templateUrl: './makePayment.component.html',
  styleUrls: ['./makePayment.component.css']
})
export class MakePaymentComponent implements OnInit {

bookingId;
booking;
showHistory:boolean;

totalPaidAmount=0;
payments=[];
payingAmount=0;
paymentType;
clientId;
payment;



  constructor(private bookingService: BookingService, 
    private paymentService:PaymentService,private router:Router) { }

  ngOnInit() {
  }

  viewHistory(){
    // console.log(this.bookingId)
    this.bookingService.getBookingPaymentHistory(this.bookingId)
    .subscribe(
      response=>{
      console.log(response);
        this.booking=response;
        this.clientId=this.booking.clientId;
        console.log(this.booking);
        this.booking.paymentId.forEach((payment)=>{
              this.payments.push(payment);
          }
        );

        console.log(this.payments);

        if(this.booking.status=="confirmed"){
          this.showHistory=true;
          this.paymentCalculations();
        }
        else if(this.booking.status=="tentative"){
          this.showHistory=false;
          alert('Tentative Booking. Confirm Before Proceed');
        }
       
    },
    (error:Response)=>{
        
      if(error.status===404){
        alert('Wrong Booking Id')
        console.log(error);
      }
      else alert('Unexpected error found');
    })
  }

paymentCalculations(){
this.payments.forEach((payment)=>{
              this.totalPaidAmount+=payment.amount;
          }
        );
        console.log(this.totalPaidAmount);
  
}

makePayment(){
  if(this.payingAmount>0){
    let payment={
      paymentType:this.paymentType,
       amount:this.payingAmount,
       date:new Date(),
      clientId:this.clientId
  
     }
     console.log(payment);
     this.paymentService.makePayment(payment)
     .subscribe(response=>{
       this.payment=response;
       console.log(response);
       this.updateBookingTable(this.payment._id);
       this.router.navigate(['/home']);
     },
      (error:Response)=>{
  
     })
  }
  
}

updateBookingTable(paymentId){

  this.payments.push(paymentId);
let bookinObct={
  paymentId:this.payments
}

  this.bookingService.updateConfirmedBooking(this.booking._id,bookinObct)
  .subscribe(
    response=>{
    console.log(response);
    
    
  
    // this.bookingForm.reset();   
  },
    error=>{
    console.log(error);
  }) 


}


}
