import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  halls='/assets/images/halls.jpg';
  receptionists='/assets/images/receptionist.jpg';
  services='/assets/images/services.jpg';
  menus='/assets/images/menus.jpg';
  reservations='/assets/images/reservations.jpg';

  constructor() { }

  ngOnInit() {
  }

}
