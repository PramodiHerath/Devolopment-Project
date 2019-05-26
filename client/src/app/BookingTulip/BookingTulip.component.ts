import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'BookingTulip',
  templateUrl: './BookingTulip.component.html',
  styleUrls: ['./BookingTulip.component.css']
})
export class BookingTulipComponent implements OnInit {
  constructor() { }

  eventTypes:string[]=['Wedding','Birthday Party','other'];

  tulipBookingForm = new FormGroup({
    capacity: new FormControl('',Validators.required),
    duration: new FormControl('',Validators.required),
    screen:new FormControl(''),
    tiffanyChairs:new FormControl(''),
    milkRicePortion:new FormControl('')
    
    
  }
  )

  updateBookingTable(data){

  }

  ngOnInit() {
  }

}
