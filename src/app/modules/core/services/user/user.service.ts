import { ApiService } from './../api/api.service';
import { filter, Observable, concatMap, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly apiUrl: string = '/users';

  constructor(private apiService: ApiService) {}

  login(
    email: string,
    password: string
  ): Observable<{ name: string; token: string }> {
    return this.apiService
      .get<{ name: string; email: string; password: string }[]>(
        `${this.apiUrl}`
      )
      .pipe(
        concatMap((users) => {
          for (const user of users) {
            if (user.email === email && user.password === password)
              return of({
                name: user.name,
                token:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
              });
          }
          return throwError(() => 'Authentication Failed');
        })
      );
  }
}
