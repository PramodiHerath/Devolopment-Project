import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  bringLoginForm(){
    this.router.navigate(['/login'])
  }

register(){

}
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
