import { LoginService } from './../serviceshttp/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../serviceshttp/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin:boolean;
  constructor(private router: Router,private authService:AuthService) { }


    loginForm = new FormGroup({
      userName:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
      
    }
    )
    get password(){
      return this.loginForm.get('password');
    }
   
    getTentativeBookingForm(){
      console.log(this.loginForm.value);
      let credentials=Object.assign({},this.loginForm.value)
      this.authService.login(credentials)
      .subscribe(
        response=>{
        console.log(response);
        this.router.navigate(['/tentativeBookingForm']);
      },
        error=>{
        alert('Sorry. Wrong Credentials.Enter Again');
        console.log(error);
      })
      
    }
 

  ngOnInit() {
  }

}
