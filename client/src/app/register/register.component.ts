import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    fName: new FormControl('',Validators.required),
    lName: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required)
    
  }
  )


  bringLoginForm(){
    this.router.navigate(['/login']);
  }

register(){

}
  constructor(private router: Router) { }

  ngOnInit() {
  }

}