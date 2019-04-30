import { ModuleWithProviders} from '@angular/core';
import { CallbackComponent } from './callback/callback.component';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {RaspberryComponent} from './raspberry/raspberry.component';
import {ArduinoComponent}  from './arduino/arduino.component';

export const appRoutes: Routes = [
  {
    path: '',
    component:HomeComponent
},
{    
    path: 'profile',
    component: ProfileComponent
},   
{    
    path: 'raspberry',
    component: RaspberryComponent
},
{
    path: 'arduino',
    component: ArduinoComponent
},
{ 
  path: '**', redirectTo: ''
}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );
