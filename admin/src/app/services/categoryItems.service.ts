import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryItemsService {
  private baseUrl='http://localhost:3000/api/';
  constructor(private http:HttpClient) { }

  getCategoryItems(){
    return this.http.get(this.baseUrl+'categoryItems');
  }
}
