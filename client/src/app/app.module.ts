import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Globals } from './globals';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { JwtModule } from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import { NavBarComponent } from './navBar/navBar.component';
import { HallsComponent } from './halls/halls.component';
import { PackageComponent } from './package/package.component';

import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { ImageslidesComponent } from './imageslides/imageslides.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ServicesComponent } from './services/services.component';
import { HallDetailComponent } from './hallDetail/hallDetail.component';
import { LoginComponent } from './login/login.component';
import { MenuesComponent } from './menues/menues.component';
import { BookingComponent } from './Booking/Booking.component';
import { RegisterComponent } from './register/register.component';
import { BookingTulipComponent } from './BookingTulip/BookingTulip.component';
import { TentativeBookingFormComponent } from './tentativeBookingForm/tentativeBookingForm.component';
import { MenuDetailComponent } from './menuDetail/menuDetail.component';
import { RoyalSilverComponent } from './royalSilver/royalSilver.component';
import { CheckboxFormatDirective } from './checkbox-format.directive';
import { PlanEventComponent } from './planEvent/planEvent.component';
import { RoyalGoldComponent } from './royalGold/royalGold.component';
import { RoyalPlatinumComponent } from './royalPlatinum/royalPlatinum.component';



@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HallsComponent,
      PackageComponent,
      HomeComponent,
      ImageslidesComponent,
      ServicesComponent,
      HallDetailComponent,
      LoginComponent,
      MenuesComponent,
      BookingComponent,
      RegisterComponent,
      BookingTulipComponent,
      TentativeBookingFormComponent,
      MenuDetailComponent,
      RoyalSilverComponent,
      CheckboxFormatDirective,
      PlanEventComponent,
      RoyalGoldComponent,
      RoyalPlatinumComponent
   ],
   imports: [

      // JwtModule.forRoot({
      //    config: {
      //      tokenGetter: function  tokenGetter() {
      //           return     localStorage.getItem('access_token');},
      //      whitelistedDomains: ['localhost:3000'],
      //      blacklistedRoutes: ['http://localhost:3000/auth/login']
      //    }
      //  }),
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      AlertModule.forRoot(),
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      HttpClientModule,
      FlexLayoutModule,
      ReactiveFormsModule,
      PdfViewerModule,
      BsDatepickerModule.forRoot(),
      ButtonsModule.forRoot(),
      CarouselModule.forRoot()
   ],
   providers: [
     Globals
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
