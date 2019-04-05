import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HallsComponent,
      PackageComponent,
      HomeComponent,
      ImageslidesComponent,
      ServicesComponent,
      HallDetailComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CarouselModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
