import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly baseUrl: string;
  readonly essentialHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.serverBaseUrl;
    this.essentialHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  get<Tout>(requestUrl: string): Observable<Tout> {
    return this.httpClient.get<Tout>(this.baseUrl + requestUrl, {
      headers: this.essentialHeaders,
    });
  }

  post<TBody, Tout>(requestUrl: string, body: TBody): Observable<Tout> {
    return this.httpClient.post<Tout>(this.baseUrl + requestUrl, body, {
      headers: this.essentialHeaders,
    });
  }

  patch<TBody, Tout>(requestUrl: string, body: TBody): Observable<Tout> {
    return this.httpClient.patch<Tout>(this.baseUrl + requestUrl, body, {
      headers: this.essentialHeaders,
    });
  }

  put<TBody, Tout>(requestUrl: string, body: TBody): Observable<Tout> {
    return this.httpClient.put<Tout>(this.baseUrl + requestUrl, body, {
      headers: this.essentialHeaders,
    });
  }

  delete<Tout>(requestUrl: string): Observable<Tout> {
    return this.httpClient.delete<Tout>(this.baseUrl + requestUrl, {
      headers: this.essentialHeaders,
    });
  }
}
