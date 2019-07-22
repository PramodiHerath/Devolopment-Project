import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }


postConfirmedBooking(newBooking){
  return this.http.post(this.baseUrl+'booking',newBooking)
}

}
