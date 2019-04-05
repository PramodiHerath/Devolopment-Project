import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hallDetail',
  templateUrl: './hallDetail.component.html',
  styleUrls: ['./hallDetail.component.css']
})
export class HallDetailComponent implements OnInit {

  pic1='/assets/images/royalRose.jpg';
  pic2='/assets/images/pic2.jpg';
  pic3='/assets/images/pic3.jpg';

  constructor() { }

  ngOnInit() {
  }

}
