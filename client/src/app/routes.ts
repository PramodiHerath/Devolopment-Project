import {Routes} from '@angular/router'
import { HallsComponent } from './halls/halls.component';
import { PackageComponent } from './package/package.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HallDetailComponent } from './hallDetail/hallDetail.component';
import { LoginComponent } from './login/login.component';
import { MenuesComponent } from './menues/menues.component';
import { BookingComponent } from './Booking/Booking.component';

export const appRoutes: Routes=[
  {path:'halls',component:HallDetailComponent},
  {path:'packages',component:PackageComponent},
  {path:'services',component:ServicesComponent},
  {path:'login',component:LoginComponent},
  {path:'menues',component:MenuesComponent},
  {path:'booking',component:BookingComponent},
  {path:'',component:HomeComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}

]
