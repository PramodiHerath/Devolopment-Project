import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl='http://localhost:3000/api/';
constructor(private http:HttpClient) { }

jwtHelper=new JwtHelperService();
decodedToken:any;



login(credentials){
  return this.http.post(this.baseUrl,credentials).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
       console.log(this.decodedToken);
      }
    })
  );
}


}
