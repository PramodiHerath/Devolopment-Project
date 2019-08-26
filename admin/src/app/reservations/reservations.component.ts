import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  isAdmin=this.authService.decodedToken.isAdmin;
  constructor(private router:Router,private authService:AuthService) { }
  ConfirmedBookings='/assets/images/Confirmed Bookings.png';
  TentativeBookings='/assets/images/Tentative Bookings.png';

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

}
