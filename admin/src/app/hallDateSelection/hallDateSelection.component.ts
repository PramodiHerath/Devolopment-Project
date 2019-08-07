import { Router } from '@angular/router';
import { CreateConfirmedBookingComponent } from './../createConfirmedBooking/createConfirmedBooking.component';
import { BookingService } from './../services/booking.service';
import { HallsService } from './../services/halls.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'hallDateSelection',
  templateUrl: './hallDateSelection.component.html',
  styleUrls: ['./hallDateSelection.component.css']
})
export class HallDateSelectionComponent implements OnInit {

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
  
  time:any;
  hallId:any;
  date:Date;

  constructor(private hallService:HallsService,
    private bookingService: BookingService,private route:Router) { }

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

  selectDay(){
    this.time="day";
    this.hallId=this.checkAvailabilityForm.value.hall;
    this.date=this.checkAvailabilityForm.value.date;
    CreateConfirmedBookingComponent.selectedDate=this.date;
    CreateConfirmedBookingComponent.selectedHall=this.hallId;
    CreateConfirmedBookingComponent.selectedTime=this.time;

    this.route.navigate(['/createConfirmedBookings']);
  }

  selectNight(){
    this.time="night";
    this.hallId=this.checkAvailabilityForm.value.hall;
    this.date=this.checkAvailabilityForm.value.date;
    CreateConfirmedBookingComponent.selectedDate=this.date;
    CreateConfirmedBookingComponent.selectedHall=this.hallId;
    CreateConfirmedBookingComponent.selectedTime=this.time;

    this.route.navigate(['/createConfirmedBookings']);
  }

  selectWholeDay(){
    this.time="wholeDay";
    this.hallId=this.checkAvailabilityForm.value.hall;
    this.date=this.checkAvailabilityForm.value.date;
    CreateConfirmedBookingComponent.selectedDate=this.date;
    CreateConfirmedBookingComponent.selectedHall=this.hallId;
    CreateConfirmedBookingComponent.selectedTime=this.time;

    this.route.navigate(['/createConfirmedBookings']);

  }

  checkAvailability(data){

    let date=(new Date(data.date)).getDate();
    let month=(new Date(data.date)).getMonth()+1;
    let year=(new Date(data.date)).getFullYear();
    let hallId=data.hall;
    console.log(hallId);
    console.log(date);
    console.log(year);
    console.log(month);
    this.bookingService.checkAvailability(hallId,date,month,year)
    .subscribe(
      response=>{
        // console.log(response);
        this.reservations=response;
        this.allowDay=false;
        this.allowNight=false;
        this.allowFullday=false;
        console.log(this.reservations);

        this.reservations.forEach(reservation => {
          if(reservation.time=='day'){
            this.allowDay=true;
          }
          if(reservation.time=='night'){
            this.allowNight=true;
          }
          if(reservation.time=='fullday'){
            this.allowFullday=true;
          }
        });

    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })  
  }


}
