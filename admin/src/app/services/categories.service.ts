import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl='http://localhost:3000/api/categories';

constructor(private http:HttpClient) { }

getCategories(){
  return this.http.get(this.baseUrl)
}

postCategories(newCategory){
  return this.http.post(this.baseUrl,newCategory)
}
}
