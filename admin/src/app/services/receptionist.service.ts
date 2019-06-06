import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
  private baseUrl='http://localhost:3000/api/';

constructor(private http:HttpClient) { }

getAllUsers(){
  return this.http.get(this.baseUrl+'user')
}
postUsers(newUser){
  return this.http.post(this.baseUrl+'user',newUser)
}

}
