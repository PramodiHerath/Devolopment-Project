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
addMenuPhoto(newMenu){
  return this.http.post(this.baseUrl+'menus/images',newMenu);
}
getMenu(menuId){
  return this.http.get(this.baseUrl+'menus/'+menuId);
}
updateMenu(menuId,menu){
  return this.http.put(this.baseUrl+'menus/'+menuId,menu);
}
deleteMenu(menuId){
  return this.http.delete(this.baseUrl + 'menus/'+ menuId)
}

}
