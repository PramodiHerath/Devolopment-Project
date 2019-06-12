import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl='http://localhost:3000/api/';

constructor(private http:HttpClient) { }

getAllCategories(){
  return this.http.get(this.baseUrl+'categories')
  
}

getCategoryItems(catergoryId){
  return this.http.get(this.baseUrl+'categoryItems/'+catergoryId)
  
}

getCategoryDetails(catergoryId){
  return this.http.get(this.baseUrl+'categories/'+catergoryId)
}

postCategories(newCategory){
  return this.http.post(this.baseUrl+'categories',newCategory)
}
updateCategory(changedCategory,updatingId){
 
    return this.http.put(this.baseUrl + 'categories/'+updatingId, changedCategory)
  
}
deleteCategory(category){
    return this.http.delete(this.baseUrl + 'categories/'+ category)
}
}
