import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private http: HttpClient) {}
  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}/api/User/login`, { email, password });
  // }
  login(email: string, password: string): Observable<any> {
    const loginRequest = { email, password };
    return this.http.post(`${environment.apiUrl}/api/User/login`, loginRequest);
  }
  
}