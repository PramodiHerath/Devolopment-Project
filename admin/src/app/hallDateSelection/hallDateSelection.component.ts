import { ClientService } from './../services/client.service';
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
  showReservations:boolean;
  clients:any;
  tentativeClientId:any;
  

  time:any;
  hallId:any;
  date:Date;

  constructor(private hallService:HallsService,
    private bookingService: BookingService,private route:Router,private clientService:ClientService) { }

  ngOnInit() {
    this.bringHalls();
    this.loadClients();
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
    let indexOfHall=this.halls.findIndex(x => x._id ==this.hallId);
    this.date=this.checkAvailabilityForm.value.date;
    CreateConfirmedBookingComponent.selectedDate=this.date;
    CreateConfirmedBookingComponent.selectedHall=this.halls[indexOfHall];
    CreateConfirmedBookingComponent.selectedTime=this.time;

    this.route.navigate(['/createConfirmedBookings']);
  }

  selectNight(){
    
    this.time="night";
    this.hallId=this.checkAvailabilityForm.value.hall;
    let indexOfHall=this.halls.findIndex(x => x._id ==this.hallId);
    this.date=this.checkAvailabilityForm.value.date;
    CreateConfirmedBookingComponent.selectedDate=this.date;
    CreateConfirmedBookingComponent.selectedHall=this.halls[indexOfHall];
    CreateConfirmedBookingComponent.selectedTime=this.time;

    // console.log(this.halls[indexOfHall]);
    this.route.navigate(['/createConfirmedBookings']);
  }

  selectWholeDay(){
   
    this.time="wholeDay";
    this.hallId=this.checkAvailabilityForm.value.hall;
    let indexOfHall=this.halls.findIndex(x => x._id ==this.hallId);
    this.date=this.checkAvailabilityForm.value.date;
    CreateConfirmedBookingComponent.selectedDate=this.date;
    CreateConfirmedBookingComponent.selectedHall=this.halls[indexOfHall];
    CreateConfirmedBookingComponent.selectedTime=this.time;

    this.route.navigate(['/createConfirmedBookings']);

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
    clientId:this.tentativeClientId,
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
    clientId:this.tentativeClientId,
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
    clientId:this.tentativeClientId,
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
 
    this.bookingService.postConfirmedBooking(tentativeBooking)
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

searchClient(event){

  if((event.keyCode==40)||(event.keyCode==38)){
    return 
  }
  this.clientService.searchClient(this.tentativeClientId)
  .subscribe(response=>{
    this.clients=response;
    
  },(error:Response)=>{
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
