import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private baseUrl='http://localhost:3000/api/';

  currentYear=new Date().getFullYear();

  year =this.currentYear.toString();
  constructor(private http:HttpClient) { }
  
getInterestReport(){
  return this.http.get(this.baseUrl+'ratingReport')
}

getHallsReport(year){
  return this.http.get(this.baseUrl+'ratingReport/getBookingsReport?year='+year)
}

}
