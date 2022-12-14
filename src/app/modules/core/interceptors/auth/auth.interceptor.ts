import { AuthService } from './../../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.currentUser) {
      request = request.clone({
        setHeaders: {
          // ...request.headers,
          Authorization: `Bearer ${this.authService.currentUser.token}`,
        },
      });
    }
    return next.handle(request);
  }
}
