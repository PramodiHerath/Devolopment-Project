import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  constructor(private clientService:ClientService) { }
clients;
clientsToDisplay:any;
searchKey:any;
  loadClients(){
    this.clientService.getClients()
    .subscribe(
      response=>{
        console.log(response);
        this.clients=response;
         this.clientsToDisplay=this.clients;
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 
  }

  ngOnInit() {
    this.loadClients();
  }
  searchClients(){
   console.log(this.searchKey);
    let filteredClients=[]
    if(this.searchKey==null){
      filteredClients=this.clients;
    }
    else{
      this.clients.forEach(client => {
        let clientname=client.name.toLowerCase();
        if(clientname.includes(this.searchKey)){
          filteredClients.push(client);
        }
      });

    }
    this.clientsToDisplay = filteredClients;
  }
}
