import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }


getTaxRate(){
  return this.http.get(this.baseUrl+'tax')
  
}

updateTaxRate(updatingId,newRate){
  return this.http.put(this.baseUrl + 'tax/'+updatingId, newRate)
}

}
