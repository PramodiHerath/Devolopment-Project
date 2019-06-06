
import { ReceptionistsComponent } from './receptionists/receptionists.component';
import { ItemComponent } from './item/item.component';
import { AuthGuard } from './services/authGuard.service';
import { CategoriesComponent } from './categories/categories.component';
import { MenusComponent } from './menus/menus.component';

import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';


export const appRoutes: Routes= [

    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent,},
    {path:'menus',component:MenusComponent,},
    {path:'categories',component:CategoriesComponent},
    {path:'item',component:ItemComponent,},
    {path:'receptionists',component:ReceptionistsComponent},
    {path:'',component: LoginComponent},
    {path:'**',redirectTo:'',pathMatch:'full'}
  
  ]