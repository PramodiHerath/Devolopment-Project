import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }
postClients(newClient){
  return this.http.post(this.baseUrl+'client',newClient)
}
getClient(clientId){
  return this.http.get(this.baseUrl+'client/'+clientId)
}
postMember(newMember){
  return this.http.post(this.baseUrl+'member',newMember)
}


}
