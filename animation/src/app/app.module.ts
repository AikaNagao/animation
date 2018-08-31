import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayComponent } from './day/day.component';
import { NightComponent } from './night/night.component';
import { AppRoutingModule } from './/app-routing.module';
import { SunobjComponent } from './obj/sunobj/sunobj.component';
import { MountainobjComponent } from './obj/mountainobj/mountainobj.component';
import { AnimationService } from './service/animation.service';
import { RainobjComponent } from './rainobj/rainobj.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayComponent,
    NightComponent,
    SunobjComponent,
    MountainobjComponent,
    RainobjComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AnimationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
