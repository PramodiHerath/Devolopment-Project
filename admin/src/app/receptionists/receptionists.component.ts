import { ReceptionistService } from './../services/receptionist.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
@Component({
  selector: 'admin-receptionists',
  templateUrl: './receptionists.component.html',
  styleUrls: ['./receptionists.component.css']
})
export class ReceptionistsComponent implements OnInit {


  users : any  ;
  newUser:object;
  changedUser:object;
  
  add:boolean;
  update:boolean;
  delete:boolean;
  updateForm:boolean;
  updatingUser:String;

  
  addUserForm = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    role:new FormControl('',Validators.required),
    isAdmin:new FormControl('',Validators.required),
    telePhoneNumber:new FormControl('',Validators.required),
    emailAddress:new FormControl('',Validators.required)


  })
  
  updateUserForm = new FormGroup({
    newName: new FormControl('',Validators.required),
    newPrice: new FormControl('',Validators.required)
 })


  Role=["Receptionist","Manager"]

  constructor(private service:ReceptionistService) {
    
    this.service.getAllUsers()
    .subscribe(
      response=>{
        console.log(response);
         this.users=response;
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })  
   }

   addUser(){
    this.addUserForm.patchValue({isAdmin:"false"})
    this.newUser=Object.assign({},this.addUserForm.value);
    console.log(this.newUser);
    this.service.postUsers(this.newUser)
    .subscribe(
      response=>{
      this.users.push(response);
      console.log(response);
      this.addUserForm.reset();   
  },
      error=>{
      alert('An unexpected error occurred.');
      console.log(error);
  }) 
 }
 bringUpdateForm(i){
      
  this.update=true;
  console.log(this.users[i].name);
  this.updatingUser=this.users[i].name;
}


bringAddUser(){
  this.update=false;
  this.delete=false;
  this.add=true;

}
bringUpdateUser(){
this.update=true;
this.delete=false;
this.add=false;

}

bringDeleteUser(){
this.update=false;
this.delete=true;
this.add=false;

}

  ngOnInit() {
  }

}
