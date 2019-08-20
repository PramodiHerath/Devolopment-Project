import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HallService } from '../serviceshttp/hall.service';
import { BookingService } from '../serviceshttp/booking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../serviceshttp/auth.service';

@Component({
  selector: 'tentativeBookingForm',
  templateUrl: './tentativeBookingForm.component.html',
  styleUrls: ['./tentativeBookingForm.component.css']
})
export class TentativeBookingFormComponent implements OnInit {
  clientId=this.authService.decodedToken.clientId;
  
  checkAvailabilityForm = new FormGroup({
    hall: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required)
  }
  )

  
  halls;
  allowDay:boolean;
  allowNight:boolean;
  allowFullday:boolean;
  reservations:any;
  showReservations:boolean;
  clients:any;
  tentativeClientId:any;
  

  time:any;
  hallId:any;
  date:Date;

  constructor(private hallService:HallService,
    private bookingService: BookingService,private route:Router,private authService:AuthService) { }

  ngOnInit() {
    this.bringHalls();
  
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


  

  

selectTentativeDay(){
  let tentativeBooking={
    status:'tentative',
    date:this.checkAvailabilityForm.value.date,
    time:"day",
    eventType:'',
    capacity:0,
    menu:{},
    hall:this.checkAvailabilityForm.value.hall,
    clientId:this.clientId,
    services:[],
    paymentId:[],
    totalBookingCharge:0,
    damageCharge:0,
    totalCharge:0
  }
  console.log(tentativeBooking);
  this.makeTentativeBooking(tentativeBooking);
}
selectTentativeNight(){
  let tentativeBooking={
    status:'tentative',
    date:this.checkAvailabilityForm.value.date,
    time:"night",
    eventType:'',
    capacity:0,
    menu:{},
    hall:this.checkAvailabilityForm.value.hall,
    clientId:this.clientId,
    services:[],
    paymentId:[],
    totalBookingCharge:0,
    damageCharge:0,
    totalCharge:0
  }
  console.log(tentativeBooking);
  this.makeTentativeBooking(tentativeBooking);

}
selectTentativeWholeDay(){
  let tentativeBooking={
    status:'tentative',
    date:this.checkAvailabilityForm.value.date,
    time:"wholeDay",
    eventType:'',
    capacity:0,
    menu:{},
    hall:this.checkAvailabilityForm.value.hall,
    clientId:this.clientId,
    services:[],
    paymentId:[],
    totalBookingCharge:0,
    damageCharge:0,
    totalCharge:0
  }
  console.log(tentativeBooking);
this.makeTentativeBooking(tentativeBooking);
}

makeTentativeBooking(tentativeBooking){
 
    this.bookingService.postTentativeBooking(tentativeBooking)
    .subscribe(
      response=>{
      console.log(response);
      this.route.navigate(['/home']);
      
    
      // this.bookingForm.reset();   
    },
      error=>{
      console.log(error);
    }) 
}


  checkAvailability(data){

    let date=new Date(data.date);
    date.setDate(date.getDate());
    let dateToCheck=date.getDate();
    let month=(new Date(data.date)).getMonth();
    let year=(new Date(data.date)).getFullYear();
    let hallId=data.hall;
    console.log(hallId);
    console.log(dateToCheck);
    console.log(year);
    console.log(month);
    this.bookingService.checkAvailability(hallId,dateToCheck,month,year)
    .subscribe(
      response=>{
        // console.log(response);
        this.reservations=response;
        this.allowDay=false;
        this.allowNight=false;
        this.allowFullday=false;
        console.log(this.reservations);

        if(this.reservations[0]){
          this.showReservations=true;
        }

        this.reservations.forEach(reservation => {
          reservation.date=new Date(reservation.date).toDateString();
          if(reservation.time=='day'){
            this.allowDay=true;
             this.allowFullday=true;
          }
          if(reservation.time=='night'){
            this.allowNight=true;
            this.allowFullday=true;
          }
          if(reservation.time=='wholeDay'){
            this.allowFullday=true;
            this.allowNight=true;
            this.allowDay=true;
          }
        });

    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })  
  }



}
