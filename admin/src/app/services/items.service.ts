import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

getAllItems(){
  return this.http.get(this.baseUrl+'item');
}

searchItem(str:String){
  return this.http.get(this.baseUrl + 'searchItem?itemName='+str);
}
}
