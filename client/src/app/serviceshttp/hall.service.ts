import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

getAllHalls(){
  return this.http.get(this.baseUrl+'halls');
}

}
