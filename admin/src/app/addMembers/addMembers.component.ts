import { BookingService } from './../services/booking.service';
import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addMembers',
  templateUrl: './addMembers.component.html',
  styleUrls: ['./addMembers.component.css']
})
export class AddMembersComponent implements OnInit {

  clients;
  showDetails:boolean;
  clientBooking;
  clientName;
  clientId;
  email;
  url:string;

  constructor(private clientService:ClientService,private bookingService: BookingService) { }

  ngOnInit() {
    this.loadClients();
  }

  loadClients(){
    this.clientService.getClients()
    .subscribe(
      response=>{
        console.log(response);
        this.clients=response;
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 
  }

  
  bringDetails(client){
    this.clientId=client._id;
    this.email=client.emailAddress;
    this.clientName=client.name;
    this.bookingService.getClientBookings(client._id)
    .subscribe(
      response=>{
        console.log(response);
        this.clientBooking=response;
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })

    this.showDetails=true;

  }

  addAsMember(){
    this.url="http://localhost:4200/register/"+this.clientId;
    let cleintObject={
      email:this.email,
      url:this.url
    }
    this.clientService.addAsMember(cleintObject)
    .subscribe(
      response=>{
        console.log(response);
        
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 



  }

  

}
