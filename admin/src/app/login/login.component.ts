import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    userName:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  
  constructor(private router: Router, private authService:AuthService) { }

  getHomeComponent(){
    console.log(this.loginForm.value);
    let credentials=Object.assign({},this.loginForm.value)
    this.authService.login(credentials)
    .subscribe(
      response=>{
      console.log(response);
      this.router.navigate(['/home']);
    },
      error=>{
      alert('An unexpected error occurred.');
      console.log(error);
    })
    
  }

  

  ngOnInit() {
  }

}
