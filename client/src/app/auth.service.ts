import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  public login(userInfo: User): void {
    localStorage.setItem('TOKEN', 'token');
  }

  public getIsLoggedIn(): boolean {
    return localStorage.getItem('TOKEN') !== null;
  }

  public logout(): void {
    localStorage.removeItem('TOKEN');
  }
}
