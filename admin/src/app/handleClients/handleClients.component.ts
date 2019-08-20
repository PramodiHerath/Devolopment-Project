import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'handleClients',
  templateUrl: './handleClients.component.html',
  styleUrls: ['./handleClients.component.css']
})
export class HandleClientsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }



  bringCreateClients(){
    this.router.navigate(['/createclient']);
  }

  bringAddMembers(){
    this.router.navigate(['/addMembers']);
  }

}
