import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  jwtHelper=new JwtHelperService();
  constructor(private authService:AuthService){}
   
  ngOnInit(){
      const token=localStorage.getItem('token');
      if(token){
        this.authService.decodedToken=this.jwtHelper.decodeToken(token);
      }
  }
}
