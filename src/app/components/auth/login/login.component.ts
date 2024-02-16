import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: any;
  password: any;

  constructor(
    private authService: AuthService,
    private route: Router
    ) {}

  onLogin(form: any) {
    if (form.valid) {
      const isLoginSuccess = this.authService.loginUser(this.email, this.password);
      if (isLoginSuccess) {
        console.log('Login successful')
        // Navigate to the dashboard or home page
      } else {
        console.log('Login failed')
        // Show error message
      }
    }

  }
  gotoSignUp() {
    this.route.navigateByUrl('/signup');
  }
}
