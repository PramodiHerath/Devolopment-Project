import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

getAllServices(){
  return this.http.get(this.baseUrl+'services');
  
}

}
