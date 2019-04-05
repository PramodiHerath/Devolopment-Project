import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {
  hall1='/assets/images/hall1.jpg';
  hall2='/assets/images/hall2.jpg';
  royalRose='/assets/images/royalRose.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
