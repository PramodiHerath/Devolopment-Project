import { BookingService } from './../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  yearMonthBookings:any;

  currentYear=new Date().getFullYear();
  selectedMonth = new Date().getMonth().toString();
  selectedYear =this.currentYear.toString();

  years=[
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
  ];
  months = [
    {value: '0', viewValue: 'January'},
    {value: '1', viewValue: 'February'},
    {value: '2', viewValue: 'March'},
    {value: '3', viewValue: 'April'},
    {value: '4', viewValue: 'May'},
    {value: '5', viewValue: 'June'},
    {value: '6', viewValue: 'July'},
    {value: '7', viewValue: 'August'},
    {value: '8', viewValue: 'September'},
    {value: '9', viewValue: 'Octomber'},
    {value: '10', viewValue: 'November'},
    {value: '11', viewValue: 'December'}
  ];


  isAdmin=this.authService.decodedToken.isAdmin;
  constructor(private router:Router,private authService:AuthService,private bookingService:BookingService) { }
  // ConfirmedBookings='/assets/images/Confirmed Bookings.png';
  // TentativeBookings='/assets/images/Tentative Bookings.png';

  bringConfirmedBookings(){

    this.router.navigate(['/hallDateSelection']);
  }
  bringTentativeBookings(){
    this.router.navigate(['/createTentativeBookings']);
  }
  bringCloseBookings(){
    this.router.navigate(['/closeConfirmedBookings']);
  }
  ngOnInit() {
  }

  
  getSelectedYearMonthBookings(){
    if(this.selectedMonth==''){
      
    }
    else{
      this.bookingService.getMonthBookings(this.selectedYear,this.selectedMonth)
      .subscribe(response=>{
     
        console.log(response);
        this.yearMonthBookings=response;

        this.yearMonthBookings.forEach(booking => {
          booking.date=new Date(booking.date).toDateString();
        });

         },(error:Response)=>{
        console.log(error);
      })
    }
    
}


}
