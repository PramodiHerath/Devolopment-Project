import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HallsService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

getAllHalls(){
  return this.http.get(this.baseUrl+'halls');
}
addHall(newHall){
  return this.http.post(this.baseUrl+'halls',newHall);
}

}
