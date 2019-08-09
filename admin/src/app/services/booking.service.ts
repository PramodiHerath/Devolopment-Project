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
  return this.http.get(this.baseUrl+'booking/checkAvailability/all?hallId='+hallId+'&date='+date+'&month='+month+'&year='+year)
}

getTentativeBookings(){
  return this.http.get(this.baseUrl+'booking/tentative/all')
}

confirmTentativeBooking(bookingId,booking){
  return this.http.put(this.baseUrl+'booking/'+bookingId,booking)
}

deleteTativeBooking(bookingId){
  return this.http.delete(this.baseUrl + 'booking/'+ bookingId)
}

}

// http://localhost:3000/api/booking/checkAvailability?hallId=3&date=25&month=8&year=2019