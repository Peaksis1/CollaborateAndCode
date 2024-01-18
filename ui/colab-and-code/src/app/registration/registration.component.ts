// registration.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';

  constructor(private registrationService: RegistrationService, private router: Router) { }

  register(): void {
    this.registrationService.register(this.username, this.password)
      .subscribe(
        response => {
          // Handle successful registration
          console.log('Registration successful:', response);
          this.router.navigate(['/login']); // Redirect to login or another route
        },
        error => {
          // Handle registration error
          console.error('Registration error:', error);
        }
      );
  }
}
