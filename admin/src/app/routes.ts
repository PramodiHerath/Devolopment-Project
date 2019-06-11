import { MainMenusComponent } from './mainMenus/mainMenus.component';
import { ViewMenuItemsComponent } from './viewMenuItems/viewMenuItems.component';
import { ServiceComponent } from './service/service.component';
import { CategoryItemsComponent } from './categoryItems/categoryItems.component';

import { ReceptionistsComponent } from './receptionists/receptionists.component';
import { ItemComponent } from './item/item.component';
import { AuthGuard } from './services/authGuard.service';
import { CategoriesComponent } from './categories/categories.component';
import { MenusComponent } from './menus/menus.component';

import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ViewMenuComponent } from './viewMenu/viewMenu.component';


export const appRoutes: Routes= [

    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent,},
    {path:'menus',component:MenusComponent,},
    {path:'categories',component:CategoriesComponent},
    {path:'item',component:ItemComponent,},
    {path:'receptionists',component:ReceptionistsComponent},
    {path:'services',component:ServiceComponent},
    {path:'viewMenu',component:ViewMenuComponent},
    {path:'createMenu',component:MainMenusComponent},
    {path:'viewMenuItems/:menuId',component:ViewMenuItemsComponent},
    {path:'',component: LoginComponent},
    {path:'categoryItem/:categoryId',component: CategoryItemsComponent},
    {path:'**',redirectTo:'',pathMatch:'full'}
  
  ]