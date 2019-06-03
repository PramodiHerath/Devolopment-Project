import { JwtHelperService } from '@auth0/angular-jwt';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



constructor(private http:HttpClient) { }

jwtHelper=new JwtHelperService();
decodedToken:any;
private baseUrl='http://localhost:3000/api/';
login(credentials: any) {
  return this.http.post(this.baseUrl + 'userLogin', credentials).pipe(
    map((response: any) => {
      console.log(response);
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
       console.log(this.decodedToken);
      }
    })
  );
}

isLogedin(){
  // let jwtHelper=new JwtHelper();
  let token=localStorage.getItem('token');

  if(!token) return false;
  // jwtHelper.

  return true;
}
}