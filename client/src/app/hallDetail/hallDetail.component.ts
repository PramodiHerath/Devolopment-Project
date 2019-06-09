import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hallDetail',
  templateUrl: './hallDetail.component.html',
  styleUrls: ['./hallDetail.component.css']
})
export class HallDetailComponent implements OnInit {

  lotus1='/assets/images/royalLotus/royalLotus1.jpg';
  lotus2='/assets/images/royalLotus/royalLotus2.jpg';
  lotus3='/assets/images/royalLotus/royalLotus3.jpg';
  lotus4='/assets/images/royalLotus/royalLotus4.jpg';
  lotus5='/assets/images/royalLotus/royalLotus5.jpg';
  lotus6='/assets/images/royalLotus/royalLotus6.jpg';


  tulip1='/assets/images/royalTulip/tulip1.jpg';
  tulip2='/assets/images/royalTulip/tulip2.jpg';
  tulip3='/assets/images/royalTulip/tulip3.jpg';
  tulip4='/assets/images/royalTulip/tulip4.jpg';
  tulip5='/assets/images/royalTulip/tulip5.jpg';
  tulip6='/assets/images/royalTulip/tulip6.jpg';

  pic1='/assets/images/royalRose.jpg';
  pic2='/assets/images/pic2.jpg';
  pic3='/assets/images/pic3.jpg';

  constructor(private router: Router) { }
  bringTable(){
    this.router.navigate(['/planEvent'])
  }
  ngOnInit() {
  }

}
