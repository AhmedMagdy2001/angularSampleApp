import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  registerData = {userName:'', email: '', password: '' };

  constructor(private authService: AuthService) { }

  onRegister() {
    this.authService.register(this.registerData).subscribe(
      () => {
        // Handle successful registration (e.g., navigate to login page)
        console.log('Registration successful!');
      },
      (error) => {
        // Handle registration error
        console.error('Registration failed:', error);
      }
    );
  }

}
