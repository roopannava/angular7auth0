import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  moduleId: module.id, 
  selector: 'arduino',
  templateUrl: `arduino.component.html`,
})
export class ArduinoComponent  {
  constructor(public auth: AuthService) { }
 }
