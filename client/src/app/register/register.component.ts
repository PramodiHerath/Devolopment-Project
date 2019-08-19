import { LoginService } from './../serviceshttp/login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../serviceshttp/client.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newClient:object;
  clientId;
  client;

  registrationForm = new FormGroup({
    name: new FormControl('',Validators.required),
    telePhoneNumber: new FormControl('',Validators.required),
    emailAddress:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',Validators.required),
    
  }
  )
  constructor(private router: Router,private clientService:ClientService,private route:ActivatedRoute) { }

  newMember;

  ngOnInit() {
    this.bringClientDetails();
  }

  create(){
  //   this.newMember=Object.assign({},this.registrationForm.value);
  //   console.log(this.newMember);
  //   this.clientService.postMember(this.newMember)
  //   .subscribe(
  //     response=>{
  //     console.log(response);
  //     this.router.navigate(['/tentativeBookingForm']);
        
  // },
  //     error=>{
  //     alert('An unexpected error occurred.');
  //     console.log(error);
  // }) 
  }

  bringLoginForm(){
    
    this.router.navigate(['/login']);
  }

  bringBookingForm(){
   
  }

register(){
  if(this.registrationForm.valid){
 
}
}
  

bringClientDetails(){
this.route.paramMap
    .subscribe(params=>{
      this.clientId=params.get('clientId');
      console.log(this.clientId);
      this.clientService.getClient(this.clientId)
      .subscribe(
        response=>{
          console.log(response);
          
           this.client=response[0];
           console.log(this.client);
           console.log(this.client.name);
           this.registrationForm.setValue({
            name:this.client.name,
            telephoneNumber:this.client.telephoneNumber,
            emailAddress:this.client.emailAddress,
            password:''
          })
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      })
    })

   
  }

  

}