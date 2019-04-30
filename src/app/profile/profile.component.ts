import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';
@Component({
  moduleId: module.id, 
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 
  constructor(public auth: AuthService) { }
}
