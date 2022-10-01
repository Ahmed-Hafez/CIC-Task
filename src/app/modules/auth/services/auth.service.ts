import { UserService } from './../../core/services/user/user.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser: { name: string; token: string } | undefined;
  private setCurrentUser(user: { name: string; token: string } | undefined) {
    this._currentUser = user;
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }
  get currentUser(): { name: string; token: string } | undefined {
    return this._currentUser;
  }

  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$;
  }

  constructor(private userService: UserService, private router: Router) {
    let user = localStorage.getItem('currentUser');
    if (user) {
      this._currentUser = JSON.parse(user);
      this._isLoggedIn$.next(true);
    }
  }

  login(
    email: string,
    password: string
  ): Observable<{
    name: string;
    token: string;
  }> {
    return this.userService.login(email, password).pipe(
      tap((user) => {
        this.setCurrentUser(user);
        this._isLoggedIn$.next(true);
        this.router.navigate(['employees']);
      })
    );
  }

  logout(): void {
    this._isLoggedIn$.next(false);
    this.setCurrentUser(undefined);
    this.router.navigate(['/']);
  }
}
