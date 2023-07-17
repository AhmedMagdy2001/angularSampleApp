import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginData = { email: '', password: '' };

  constructor(private authService: AuthService,private router: Router) { }

  login() {
    this.authService.login(this.loginData).subscribe(
      () => {
        this.router.navigateByUrl('/news');
        console.log('Login successful!');
      },
      (error) => {
        
        console.error('Login failed:', error);
      }
    );
  }
}
