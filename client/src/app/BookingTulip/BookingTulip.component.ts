import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'BookingTulip',
  templateUrl: './BookingTulip.component.html',
  styleUrls: ['./BookingTulip.component.css']
})
export class BookingTulipComponent implements OnInit {

  myForm = new FormGroup({
    myDateYMD: new FormControl(new Date()),
    myDateFull: new FormControl(new Date()),
    myDateMDY: new FormControl(new Date())
  });

  constructor() { }

  ngOnInit() {
  }

}
