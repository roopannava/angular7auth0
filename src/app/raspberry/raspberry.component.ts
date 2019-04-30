import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';
@Component({
  moduleId: module.id, 
  selector: 'raspberry',
  templateUrl: `raspberry.component.html`,
})
export class RaspberryComponent  { 
  constructor(public auth: AuthService) { }
}
