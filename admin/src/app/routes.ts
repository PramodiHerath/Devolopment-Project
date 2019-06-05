import { ItemComponent } from './item/item.component';
import { AuthGuard } from './services/authGuard.service';
import { CategoriesComponent } from './categories/categories.component';
import { MenusComponent } from './menus/menus.component';

import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';


export const appRoutes: Routes= [

    {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
    {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
    {path:'menus',component:MenusComponent,canActivate:[AuthGuard]},
    {path:'categories',component:CategoriesComponent,canActivate:[AuthGuard]},
    {path:'item',component:ItemComponent,canActivate:[AuthGuard]},
    {path:'',component: LoginComponent},
    {path:'**',redirectTo:'',pathMatch:'full'}
  
  ]