import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  registerUser(userData: {email: string, password: string}): boolean {
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  }

  loginUser(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user, email, password)
    return email === user.email && password === user.password;
  }
}
