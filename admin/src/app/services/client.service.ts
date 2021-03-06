import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

postClients(newClient){
  return this.http.post(this.baseUrl+'client',newClient)
}
searchClient(string){
  return this.http.get(this.baseUrl + 'client/searchClient/AllClients?clientName='+string);
}

getClients(){
  return this.http.get(this.baseUrl+'client')
}

getClientsWithNoMembership(){
  return this.http.get(this.baseUrl+'client/withoutMembers/all')
}

addAsMember(object){
  return this.http.post(this.baseUrl+'client/sendEmail/toclient',object)
}

}
