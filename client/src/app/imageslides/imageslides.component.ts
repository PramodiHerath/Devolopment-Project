import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imageslides',
  templateUrl: './imageslides.component.html',
  styleUrls: ['./imageslides.component.css']
})
export class ImageslidesComponent implements OnInit {
  pic1='/assets/images/royalRose.jpg';
  pic2='/assets/images/pic2.jpg';
  pic3='/assets/images/pic3.jpg';

  constructor() { }

  ngOnInit() {
  }

}
