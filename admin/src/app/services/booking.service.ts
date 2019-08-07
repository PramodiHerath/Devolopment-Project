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

checkAvailability(hallId,date,month,year){
  return this.http.get(this.baseUrl+'booking/checkAvailability?hallId='+hallId+'&date='+date+'&month='+month+'&year='+year)
}

}

// http://localhost:3000/api/booking/checkAvailability?hallId=3&date=25&month=8&year=2019