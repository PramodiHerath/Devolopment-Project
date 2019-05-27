import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }


    loginForm = new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',Validators.required)
      
    }
    )
    get password(){
      return this.loginForm.get('password');
    }
    getTentativeBookingForm(){
      if(this.loginForm.valid){
        this.router.navigate(['/BookingTulip']);
      }
    }
    
    
    
 

  ngOnInit() {
  }

}
