import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menues',
  templateUrl: './menues.component.html',
  styleUrls: ['./menues.component.css']
})
export class MenuesComponent implements OnInit {

  constructor() { }
  pic1='/assets/images/royalRose.jpg';
  pic2='/assets/images/pic2.jpg';
  pic3='/assets/images/pic3.jpg';

  royalSilver= '/assets/images/royalSilver.jpg';
  royalGold= '/assets/images/royalGold.jpg';
  royalPlatinum= '/assets/images/royalPlatinum.jpg';

  ngOnInit() {
  }

}
