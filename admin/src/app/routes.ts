import { MenusComponent } from './menus/menus.component';

import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';


export const appRoutes: Routes= [

    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'menus',component:MenusComponent},
    {path:'',component: LoginComponent},
    {path:'**',redirectTo:'',pathMatch:'full'}
  
  ]