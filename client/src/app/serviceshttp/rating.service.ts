import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

sendFeedBack(feedback){
  return this.http.post(this.baseUrl+'rating',feedback)
}

}
