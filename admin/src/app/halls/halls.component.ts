import { Component, OnInit } from '@angular/core';
import { HallsService } from '../services/halls.service';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {
halls;
  constructor(private hallService:HallsService) { }

  ngOnInit() {
    this.bringHalls();
  }

  bringHalls(){
    this.hallService.getAllHalls()
    .subscribe(
      response=>{
        console.log(response);
        this.halls=response;
         
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    })  

  }


}
