import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit {

  newClient:object;

  registrationForm = new FormGroup({
    name: new FormControl('',Validators.required),
    telephoneNumber: new FormControl('',Validators.required),
    emailAddress:new FormControl('',[Validators.email,Validators.required])
    
  }
  )
  constructor(private router: Router,private service:ClientService) { }

create(){
  if(this.registrationForm.valid){
    this.newClient=Object.assign({},this.registrationForm.value);
console.log(this.newClient);
this.service.postClients(this.newClient)
.subscribe(
  response=>{
  console.log(response);
  this.router.navigate(['/home']);
  this.registrationForm.reset();   
},
  error=>{
  alert('Client Already Exists.');
  console.log(error);
}) 
   
}
}

  ngOnInit() {
  }

}
