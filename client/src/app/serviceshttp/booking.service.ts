import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

postTentativeBooking(newBooking){
  return this.http.post(this.baseUrl+'booking',newBooking)
}
checkAvailability(hallId,date,month,year){
  return this.http.get(this.baseUrl+'booking/checkAvailability/all?hallId='+hallId+'&date='+date+'&month='+month+'&year='+year)
}
}
