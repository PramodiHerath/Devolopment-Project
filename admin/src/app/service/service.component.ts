import { ServiceService } from './../services/service.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'admin-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  isAdmin=this.authService.decodedToken.isAdmin;
  services:any;
  changedService:object;


add:boolean;
update:boolean;
delete:boolean;
updatingService:String;
newService:object;
updatedService:object;
updatingId:any
  
addServiceForm = new FormGroup({
  name: new FormControl('',Validators.required),
  price: new FormControl('',Validators.required),
  amount: new FormControl('',Validators.required)
}
)

updateServiceForm = new FormGroup({
  
  newName: new FormControl('',Validators.required),
  newPrice: new FormControl('',Validators.required),
  newAmount: new FormControl('',Validators.required),
}
)

  constructor(private authService:AuthService, private router:Router, private service:ServiceService) {
    this.viewServices();
   }

   viewServices(){
    this.service.getAllServices()
    .subscribe(
      response=>{
        console.log(response);
         this.services=response;
    },
      error=>{
        alert('An unexpected error occurred.');
        console.log(error);
    }) 
   };


   addService(data){
    this.newService={
      serviceName:data.name,
      servicePrice:data.price,
      amount:data.amount
   }
    this.service.postServices(this.newService)
    .subscribe(
      response=>{
      this.services.push(response);
      alert('succesfully added')
      console.log(response);
      this.addServiceForm.reset();   
  },
      error=>{
      alert('An unexpected error occurred.');
      console.log(error);
  }) 
 }

 updateService(data){
  // this.bringUpdateService();
  console.log(data);
  console.log(data.newPrice);
  console.log(data.newName);
  if(!data.newName){
    this.changedService={
      newName:this.updatingService,
      newPrice:data.newPrice,
      newAmount:data.newAmount
    }
    
  }
  else{
    this.changedService={
    newName:data.newName,
    newPrice:data.newPrice,
    newAmount:data.newAmount
 }
  }
  
  // this.changedService=Object.assign({},this.updateServiceForm.value);
  
  console.log(this.changedService)
  console.log(this.updatingId)
    this.service.updateService(this.changedService,this.updatingId)
    .subscribe(
      response=>{
      console.log(response);
      this.viewServices();
      this.updateServiceForm.reset();
    },
      error=>{
      alert('An unexpected error occurred.');
      console.log(error);
    })

  this.service.getAllServices()
  .subscribe(response=>{
     
      console.log(response);
       this.services=response;
  })
  
 }



   
   deleteService(service,i){
    this.bringDeleteService();
     this.service.deleteservice(service._id)
     .subscribe(
       response=>{
       console.log(response)
       this.services.splice(i,1) 
       alert('succesfully deleted')
    },
       (error: Response)=>{
         if(error.status===404)
         alert('This Category is Already Deleted');
         else{
           alert('An unexpected error occurred.');
           console.log(error);
         }
      
   })
    
  }

  amountSelect(event){
    if(event.checked){

      this.addServiceForm .patchValue({amount:true});
    }
    else if(!event.checked){
      // let index=this.
      this.addServiceForm .patchValue({amount:false});
    }
  }

  amountSelectUpdate(event){
    if(event.checked){

      this.updateServiceForm .patchValue({newAmount:true});
    }
    else if(!event.checked){
      // let index=this.
      this.updateServiceForm .patchValue({newAmount:false});
    }
  }

  

  bringUpdateForm(service){
     
     this.update=true;
     console.log(service.name);
     this.updatingService=service.name;
     this.updatingId=service._id;
     this.updateServiceForm .patchValue({newAmount:false});
  }

  bringAddService(){
     this.update=false;
     this.delete=false;
     this.add=true;
     this.addServiceForm .patchValue({amount:false});

  }
  bringUpdateService(){
   this.update=true;
   this.delete=false;
   this.add=false;

 }

 bringDeleteService(){
   this.update=false;
   this.delete=true;
   this.add=false;

 }
 
  ngOnInit() {
  
  }

}
