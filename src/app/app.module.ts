import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent }  from './profile/profile.component';
import { RaspberryComponent }  from './raspberry/raspberry.component';
import {ArduinoComponent} from './arduino/arduino.component';


import { appRoutes } from './app.routes';
import {appRoutingProviders} from './app.routes';
import {routing} from './app.routes';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    RaspberryComponent,
    ProfileComponent,
    ArduinoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, appRoutingProviders, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
