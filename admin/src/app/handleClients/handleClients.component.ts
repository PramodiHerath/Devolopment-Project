import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'handleClients',
  templateUrl: './handleClients.component.html',
  styleUrls: ['./handleClients.component.css']
})
export class HandleClientsComponent implements OnInit {
  isAdmin=this.authService.decodedToken.isAdmin;
  constructor(private router:Router, private authService:AuthService) { }
  
  ngOnInit() {
  }



  bringCreateClients(){
    this.router.navigate(['/createclient']);
  }

  bringAddMembers(){
    this.router.navigate(['/addMembers']);
  }
  bringClients(){
    this.router.navigate(['/clients']);
  }

}
