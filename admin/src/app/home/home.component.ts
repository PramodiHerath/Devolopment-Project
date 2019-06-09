import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  reservations='/assets/images/calandar.jpg';
  reports='/assets/images/reports.jpg';

  bringMenusComponents(){
    this.router.navigate(['/menus']);
  }
  bringReceptionistsComponents(){
    this.router.navigate(['/receptionists']);
  }
  bringServiceComponent(){
    this.router.navigate(['/services']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
