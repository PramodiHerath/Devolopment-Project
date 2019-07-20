import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'createConfirmedBooking',
  templateUrl: './createConfirmedBooking.component.html',
  styleUrls: ['./createConfirmedBooking.component.css']
})
export class CreateConfirmedBookingComponent implements OnInit {

  eventTypes:string[]=['Wedding','Birthday Party','other'];

  tulipBookingForm = new FormGroup({
    capacity: new FormControl('',Validators.required),
    duration: new FormControl('',Validators.required),
    screen:new FormControl(''),
    tiffanyChairs:new FormControl(''),
    milkRicePortion:new FormControl('')
    
    
  }
  )

  constructor() { }

  ngOnInit() {
  }

}
