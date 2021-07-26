import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private routes: Router) {}
  sendToken(token: string) {
    localStorage.setItem('key', token);
  }
  getToken() {
    return localStorage.getItem('key');
  }
  logout() {
    localStorage.removeItem('key');
    this.routes.navigate(['Login']);
  }
}
