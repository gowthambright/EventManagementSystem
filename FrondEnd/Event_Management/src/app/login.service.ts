import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private loginURL = 'http://localhost:8080/user/login';
  user(payload: any) {
    return this.http.post<any>(this.loginURL, payload);
  }
}
