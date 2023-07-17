import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44332/api/authenticate/';

  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post<any>(this.apiUrl + 'login', loginData).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token); // Store the token in localStorage
        }
      })
    );
  }

  register(registerData: any) {
    return this.http.post<any>(this.apiUrl + 'register', registerData);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove the token from localStorage
  }
}
