import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'Booking',
  templateUrl: './Booking.component.html',
  styleUrls: ['./Booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }
  bsInlineValue = new Date();
  ngOnInit() {
  }

}
