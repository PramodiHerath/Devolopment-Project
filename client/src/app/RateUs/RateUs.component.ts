import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RatingService } from '../serviceshttp/rating.service';
@Component({
  selector: 'RateUs',
  templateUrl: './RateUs.component.html',
  styleUrls: ['./RateUs.component.css']
})
export class RateUsComponent implements OnInit {

// maximum rating scale for client
drink=10;
mainCourse=10;
dessert=10;
receptionist=10;
buffetStaff=10;
manager=10;
sanitary=10;
decoration=10;
equipment=10;
air=10;
lights=10;
sounds=10;

rating=[];
clientName:any;
feedBack:object;


  constructor( private ratingService:RatingService,private router: Router) { }
  
  ngOnInit() {
    this.clientName='Name';
  }



  rate(){
    this.prepareFeedback();
    this.ratingService.sendFeedBack(this.feedBack)
    .subscribe(
      response=>{
        console.log(response);
        alert("successfully recorded");
        this.router.navigate(['/home']);
         
    },
      error=>{
        alert(error.error);
        console.log(error);
    })  
   
  }


// making array of individual rate for each title
  prepareFeedback(){
    let drink={
      section:"food",
      title:"drink",
      rating:this.drink
    }
    this.rating.push(drink);

    let mainCourse={
        section:"food",
        title:"mainCourse",
        rating:this.mainCourse
  }
  this.rating.push(mainCourse);

  let dessert={
    section:"food",
    title:"dessert",
    rating:this.dessert
}
this.rating.push(dessert);

let receptionist={
  section:"staff",
  title:"receptionist",
  rating:this.receptionist
}
this.rating.push(receptionist);

let buffetStaff={
  section:"staff",
  title:"buffetStaff",
  rating:this.buffetStaff
}
this.rating.push(buffetStaff);


let management={
  section:"staff",
  title:"management",
  rating:this.manager
}
this.rating.push(management);

let sanitary={
  section:"services",
  title:"sanitaryFacilities",
  rating:this.sanitary
}
this.rating.push(sanitary);

let decoration={
  section:"services",
  title:"decoration",
  rating:this.decoration
}
this.rating.push(decoration);

let equipments={
  section:"services",
  title:"equipments",
  rating:this.equipment
}
this.rating.push(equipments);

let airConditioning={
  section:"other",
  title:"airConditioning",
  rating:this.air
}
this.rating.push(airConditioning);

let lights={
  section:"other",
  title:"lights",
  rating:this.lights
}
this.rating.push(lights);

let sounds={
  section:"other",
  title:"sounds",
  rating:this.sounds
}
this.rating.push(sounds);

// object to be sent to the backend
this.feedBack={
  name:this.clientName,
  feedback:this.rating

}


}



}
