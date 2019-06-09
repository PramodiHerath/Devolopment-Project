import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

getAllServices(){
  return this.http.get(this.baseUrl+'services')
  
}

postServices(newService){
  return this.http.post(this.baseUrl+'services',newService)
}
updateService(changedService,updatingId){
 
    return this.http.put(this.baseUrl + 'services/'+updatingId, changedService)
  
}
deleteservice(service){
    return this.http.delete(this.baseUrl + 'services/'+ service)
}

}
