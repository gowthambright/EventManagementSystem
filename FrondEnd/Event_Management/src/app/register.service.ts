import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  private saveURL = 'http://localhost:8080/user/register';
  saveUser(payload: {
    firstName: string;
    lastName: string;
    age: string;
    gender: string;
    dateOfBirth: Date;
    email: string;
    password: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    district: string;
    pincode: string;
    state: string;
    phoneNumber: string;
  }) {
    return this.http.post<any>(this.saveURL, payload);
  }
}
