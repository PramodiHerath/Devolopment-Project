import {Routes} from '@angular/router'
import { HallsComponent } from './halls/halls.component';
import { PackageComponent } from './package/package.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HallDetailComponent } from './hallDetail/hallDetail.component';
import { LoginComponent } from './login/login.component';
import { MenuesComponent } from './menues/menues.component';
import { BookingComponent } from './Booking/Booking.component';
import { RegisterComponent } from './register/register.component';
import { BookingTulipComponent } from './BookingTulip/BookingTulip.component';
import { RoyalSilverComponent } from './royalSilver/royalSilver.component';
import { PlanEventComponent } from './planEvent/planEvent.component';
import { RateUsComponent } from './RateUs/RateUs.component';
import { TentativeBookingFormComponent } from './tentativeBookingForm/tentativeBookingForm.component';
import { AuthGuard } from './serviceshttp/authGuard.service';

export const appRoutes: Routes= [
  {path:'halls',component:HallDetailComponent},
  {path:'packages',component:PackageComponent},
  {path:'services',component:ServicesComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'menues',component:MenuesComponent},
  {path:'booking',component:BookingComponent},
  {path: 'register/:clientId', component:RegisterComponent},
  {path: 'BookingTulip', component:BookingTulipComponent},
  {path: 'royalSilver', component:RoyalSilverComponent},
  {path: 'planEvent', component:PlanEventComponent},
  {path: 'rateUs', component:RateUsComponent},
  {path: 'tentativeBookingForm', component:TentativeBookingFormComponent,canActivate:[AuthGuard]},
  {path:'package/:menuId',component: PackageComponent}, 
  {path:'',component:HomeComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}

]
