import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf'; 
import 'jspdf-autotable';

@Component({
  selector: 'admin-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  role=this.authService.decodedToken.userRole;
  isAdmin=this.authService.decodedToken.isAdmin;
  logo='/assets/images/logo.jpg';
  
  
  
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor( private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  
}
