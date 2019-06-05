import { LoginService } from './../serviceshttp/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin:boolean;
  constructor(private router: Router,private loginService: LoginService) { }


    loginForm = new FormGroup({
      userName:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
      
    }
    )
    get password(){
      return this.loginForm.get('password');
    }
    getTentativeBookingForm(){
    //   console.log(this.loginForm.value);
    //   let credentials=Object.assign({},this.loginForm.value)
    //   this.loginService.login(credentials)
    //   .subscribe(
    //     response=>{
    //     console.log(response);
    //     this.router.navigate(['/home']);
    //   },
    //     error=>{
    //     alert('An unexpected error occurred.');
    //     console.log(error);
    //   })
    //   // if(this.loginForm.valid){
    //   //   this.router.navigate(['/BookingTulip']);
    //   // }

    //   this.loginService.login(credentials)
    //     .subscribe(next=>{
    //       this.router.navigate(['/BookingTulip']);
    // },(error:Response)=>{
      
    //   if(error.status===400){
    //     this.invalidLogin= true;
    //     console.log(error);
    //   }
    //   else alert('Unexpected error found');
    // });


    }
   
 

  ngOnInit() {
  }

}
