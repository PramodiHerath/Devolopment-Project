import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'Booking',
  templateUrl: './Booking.component.html',
  styleUrls: ['./Booking.component.css']
})


export class BookingComponent implements OnInit {
  

hall1='/assets/images/hall1.jpg';
hall2='/assets/images/hall2.jpg';
royalRose='/assets/images/royalRose.jpg';

  constructor() { }
  bsInlineValue = new Date();
  ngOnInit() {
  }

}
