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
addMenus(newMenu){
  return this.http.post(this.baseUrl+'menus',newMenu);
}
getMenu(menuId){
  return this.http.get(this.baseUrl+'menus/'+menuId);
}

}
