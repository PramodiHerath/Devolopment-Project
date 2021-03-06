import { CreateTentativeBookingComponent } from './createTentativeBooking/createTentativeBooking.component';
import { CreateclientComponent } from './createclient/createclient.component';
import { MainMenusComponent } from './mainMenus/mainMenus.component';
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
import { UpdateMenuComponent } from './updateMenu/updateMenu.component';
import { ConfirmedBookingsComponent } from './ConfirmedBookings/ConfirmedBookings.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { CreateConfirmedBookingComponent } from './createConfirmedBooking/createConfirmedBooking.component';
import { HallDateSelectionComponent } from './hallDateSelection/hallDateSelection.component';
import { MakePaymentComponent } from './makePayment/makePayment.component';
import { CloseConfirmedBookingsComponent } from './closeConfirmedBookings/closeConfirmedBookings.component';
import { AddMembersComponent } from './addMembers/addMembers.component';
import { HandleClientsComponent } from './handleClients/handleClients.component';
import { ClientsComponent } from './clients/clients.component';
import { ReportsComponent } from './reports/reports.component';
import { HallsComponent } from './halls/halls.component';


export const appRoutes: Routes= [

    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent,},
    {path:'menus',component:MenusComponent,},
    {path:'createclient',component:CreateclientComponent,},
    {path:'categories',component:CategoriesComponent},
    {path:'item',component:ItemComponent,},
    {path:'receptionists',component:ReceptionistsComponent},
    {path:'services',component:ServiceComponent},
    {path:'viewMenu',component:ViewMenuComponent},
    {path:'createMenu',component:MainMenusComponent},
    {path:'makePayment',component:MakePaymentComponent},
    {path:'reservations',component:ReservationsComponent},
    {path:'confirmedBookings',component:ConfirmedBookingsComponent},
    {path:'hallDateSelection',component:HallDateSelectionComponent},
    {path:'createConfirmedBookings',component:CreateConfirmedBookingComponent},
    {path:'closeConfirmedBookings',component:CloseConfirmedBookingsComponent},
    {path:'createTentativeBookings',component:CreateTentativeBookingComponent},
    {path:'addMembers',component:AddMembersComponent},
    {path:'clients',component:ClientsComponent},
    {path:'halls',component:HallsComponent},
    {path:'reports',component:ReportsComponent},
    {path:'updateMenu/:menuId',component:UpdateMenuComponent},
    {path:'handleClients',component:HandleClientsComponent},
    {path:'',component: LoginComponent},
    {path:'categoryItem/:categoryId',component: CategoryItemsComponent},
    {path:'**',redirectTo:'',pathMatch:'full'}
  
  ]