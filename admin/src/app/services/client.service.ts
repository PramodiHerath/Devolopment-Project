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
}
