import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module'
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navBar/navBar.component';
import { MenusComponent } from './menus/menus.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { ReceptionistsComponent } from './receptionists/receptionists.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { CategoryItemsComponent } from './categoryItems/categoryItems.component';
import { ServiceComponent } from './service/service.component';
import { MainMenusComponent } from './mainMenus/mainMenus.component';
import { ViewMenuComponent } from './viewMenu/viewMenu.component';
import { UpdateMenuComponent } from './updateMenu/updateMenu.component';

import { CreateclientComponent } from './createclient/createclient.component';
import { ConfirmedBookingsComponent } from './ConfirmedBookings/ConfirmedBookings.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { CreateConfirmedBookingComponent } from './createConfirmedBooking/createConfirmedBooking.component';
import { HallDateSelectionComponent } from './hallDateSelection/hallDateSelection.component';
import { MakePaymentComponent } from './makePayment/makePayment.component';
import { CreateTentativeBookingComponent } from './createTentativeBooking/createTentativeBooking.component';
import { CloseConfirmedBookingsComponent } from './closeConfirmedBookings/closeConfirmedBookings.component';
import { AddMembersComponent } from './addMembers/addMembers.component';
import { HandleClientsComponent } from './handleClients/handleClients.component';
import { ClientsComponent } from './clients/clients.component';
import { ReportsComponent } from './reports/reports.component';
import { HallsComponent } from './halls/halls.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      NavBarComponent,
      MenusComponent,
      CategoriesComponent,
      ItemComponent,
      ReceptionistsComponent,
      ItemsTableComponent,
      CategoryItemsComponent,
      ServiceComponent,
      MainMenusComponent,
      ViewMenuComponent,
      UpdateMenuComponent,
      CreateclientComponent,
      ConfirmedBookingsComponent,
      ReservationsComponent,
      CreateConfirmedBookingComponent,
      HallDateSelectionComponent,
      MakePaymentComponent,
      CreateTentativeBookingComponent,
      CloseConfirmedBookingsComponent,
      AddMembersComponent,
      HandleClientsComponent,
      ClientsComponent,
      ReportsComponent,
      HallsComponent
   ],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      MaterialModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
