import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private router:Router) { }
  ConfirmedBookings='/assets/images/Confirmed Bookings.png';
  TentativeBookings='/assets/images/Tentative Bookings.png';

  bringConfirmedBookings(){

    this.router.navigate(['/createConfirmedBookings']);
  }
  ngOnInit() {
  }

}
