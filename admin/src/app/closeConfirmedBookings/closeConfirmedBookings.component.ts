import { BookingService } from './../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'closeConfirmedBookings',
  templateUrl: './closeConfirmedBookings.component.html',
  styleUrls: ['./closeConfirmedBookings.component.css']
})
export class CloseConfirmedBookingsComponent implements OnInit {

  bookingId;
  showHistory:boolean;
  booking;
  clientId;
  payments=[];


  totalPaidAmount=0;
  balance=0;
  totalBookingCharge=0;
  message:String;
  

  NoOfHrs;
  durationCharge=0;
  damageCharges=0;
  damageChargeMessage:string;
  finalBalance=0;
  finalBalanceMessage:string;
  clientOwe:boolean;

  constructor(private bookingService: BookingService, private paymentService:PaymentService) { }

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
        this.totalBookingCharge=this.booking.bookingCharge;
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
            this.balance=this.totalPaidAmount-this.totalBookingCharge;
            console.log(this.balance);
            if(this.balance>0){
              this.message="The Hotel Has A Key Deposit of "+ this.balance + " Rupees";
            }
            else{
              this.message= -(this.balance) + "Rupees" + "and and damage and duration charges are due to be paid." ;
            }     
    }


    calculateDurationCharges(){
      if(this.NoOfHrs>5){
        this.durationCharge=(this.NoOfHrs-5)*50000;
        console.log(this.durationCharge);

      }
      else{
        this.durationCharge=0;
      }
    }

    calculateDamageCharges(){
      this.damageChargeMessage="Damage Charges = Rs. "+this.damageCharges;
    }

    calculateFinalBalance(){
      console.log(this.balance);
      console.log(this.damageCharges);
      console.log(this.durationCharge);
      this.finalBalance=this.balance-(this.damageCharges+this.durationCharge);
      console.log(this.finalBalance);
      if(this.finalBalance>=0){
        this.finalBalanceMessage="Returning "+this.finalBalance+" Rupees to The Client";
        

      }
      else if(this.finalBalance<0){

        this.finalBalanceMessage="Client Should Pay "+Math.abs(this.finalBalance)+" Rupees to the hotel";
        this.clientOwe=true;
      }

    }

 

}
