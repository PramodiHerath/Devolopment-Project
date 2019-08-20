import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
  logo='/assets/images/logo.jpg';
  
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private router:Router) { }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}

