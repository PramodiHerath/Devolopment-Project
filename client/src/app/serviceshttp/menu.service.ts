import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }


getAllMenus(){
  return this.http.get(this.baseUrl+'menus');
  
}

getMenu(menuId){
  return this.http.get(this.baseUrl+'menus/'+menuId);
}

}
