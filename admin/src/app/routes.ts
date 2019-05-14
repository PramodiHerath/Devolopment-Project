import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';


export const appRoutes: Routes= [

    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    // {path:'',component: LoginComponent},
    {path:'**',redirectTo:'',pathMatch:'full'}
  
  ]