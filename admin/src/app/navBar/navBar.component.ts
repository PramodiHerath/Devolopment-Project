import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {


  logo='/assets/images/logo.jpg';
  
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
