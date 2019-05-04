import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',Validators.required)
      
    }
    )
    getTentativeBookingForm(){
      
    }
    
  constructor() { }

  ngOnInit() {
  }

}
