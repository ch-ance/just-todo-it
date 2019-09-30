import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { JwtResponse } from './jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  AUTH_SERVER = 'http://localhost:5000/api/auth';

  authSubject = new BehaviorSubject(false);

  logIn(user: User): Observable<JwtResponse> {
    console.log('REQUEST: ', user);
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap(async (res: JwtResponse) => {
        if (res.user) {
          localStorage.setItem('TOKEN', res.user.token);
          this.authSubject.next(true);
        }
      })
    );
  }

  logOut(): void {
    localStorage.removeItem('TOKEN');
    this.authSubject.next(false);
  }

  isAuthenticated() {
    return localStorage.getItem('TOKEN') !== null;
  }
}
