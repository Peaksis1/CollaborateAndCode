// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  login(): void {
    this.loginService.login(this.username, this.password)
      .subscribe(
        response => {
          // Handle successful login
          console.log('Login successful:', response);
          this.router.navigate(['/dashboard']); // Redirect to dashboard or another route
        },
        error => {
          // Handle login error
          console.error('Login error:', error);
        }
      );
  }
}
