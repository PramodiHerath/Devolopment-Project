import { BookingService } from './../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { Router } from '@angular/router';
import { TaxService } from '../services/tax.service';

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
  payment;
  totalCharge=0;


  totalPaidAmount=0;
  balance=0;
  totalBookingCharge=0;
  message:String;
  paymentType;
  payingAmount=0;
  // new
  hallChargeRate:number=0;
  changeHallCharge:boolean;
  newHallCharge:number;
  hallChargeId;
  changedChargeObjt;
  

  NoOfHrs;
  durationCharge=0;
  damageCharges=0;
  damageChargeMessage:string;
  finalBalance=0;
  finalBalanceMessage:string;
  clientOwe:boolean;

  constructor(private router:Router, private bookingService: BookingService, 
    private paymentService:PaymentService,private taxService:TaxService) { }

  ngOnInit() {
    this.getHallCharge();
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
        else if(this.booking.status=="closed"){
          this.showHistory=false;
          alert('This Booking is Already Closed.');
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

  getHallCharge(){
    this.taxService.getHallCharge()
    .subscribe(
      response=>{
        console.log(response);
        this.hallChargeId=response[0]._id;
        this.hallChargeRate=response[0].hallCharge;
       
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })
  }

  
  
  bringChangeHallCharge(){
    this.changeHallCharge=true;
}


updateHallCharge(){
  
  let charge={
    newHallCharge:this.newHallCharge
  }
  console.log(charge);
  console.log(this.hallChargeId);

  this.taxService.updateHallCharge(this.hallChargeId,charge)
  .subscribe(
    response=>{
      console.log(response);
      this.changedChargeObjt=response;
      this.hallChargeRate=this.changedChargeObjt.hallCharge;
      console.log(this.hallChargeRate);
  
        
  },
    error=>{
      alert('An unexpected error occurred.');
      console.log(error);
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
      console.log(this.hallChargeRate)
      if(this.NoOfHrs>5){
        this.durationCharge=(this.NoOfHrs-5)*this.hallChargeRate;
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
      console.log(this.finalBalance);
      this.totalCharge=this.durationCharge+this.damageCharges+this.totalBookingCharge;
      console.log(this.totalCharge);
      this.finalBalance=this.balance-this.damageCharges-this.durationCharge;
      console.log(this.finalBalance);
      if(this.finalBalance>=0){
        this.finalBalanceMessage="Returning "+this.finalBalance+" Rupees to The Client";
        

      }
      else if(this.finalBalance<0){

        this.finalBalanceMessage="Client Should Pay "+Math.abs(this.finalBalance)+" Rupees to the hotel";
        this.clientOwe=true;
      }

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
      status:"closed",
      paymentId:this.payments,
      damageCharge: this.damageCharges,
      durationCharge:this.durationCharge,
      totalCharge:this.totalCharge

    }
    
      this.bookingService.closeConfirmedBooking(this.booking._id,bookinObct)
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
