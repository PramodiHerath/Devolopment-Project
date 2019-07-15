import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

getMenuItems(menuId){
  return this.http.get(this.baseUrl+'menuItems/'+menuId);
}

}
