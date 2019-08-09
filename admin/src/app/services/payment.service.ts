import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }


getPayments(){
  return this.http.get(this.baseUrl+'payment')
}

makePayment(payment){
  return this.http.post(this.baseUrl+'payment',payment);

}

}
