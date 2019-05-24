import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 background='/assets/images/background.jpg';
 
  constructor(private router: Router) { }
  bringTable(){
    this.router.navigate(['/planEvent'])
  }
  ngOnInit() {
  }

}
