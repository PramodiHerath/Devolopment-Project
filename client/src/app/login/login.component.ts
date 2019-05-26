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
    get password(){
      return this.loginForm.get('password');
    }
    getTentativeBookingForm(){


      
        console.log(this.loginForm.get('email').errors);
        console.log(this.loginForm.errors);
    }
    
    
    
  constructor() { }

  ngOnInit() {
  }

}
