import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}
  private getAllURL = 'http://localhost:8080/user/getAllDetails';
  getAllDetails() {
    return this.http.get(this.getAllURL);
  }

  private saveURL = 'http://localhost:8080/user/register';
  saveData(payload: any) {
    return this.http.post<any>(this.saveURL, payload);
  }

  private getURL = 'http://localhost:8080/user/getAllDetail/{id}';
  getAllDetail(id: any) {
    return this.http.get(this.getURL);
  }

  private deleteURL = 'http://localhost:8080/user/deleteUser/{id}';
  delete(id: number) {
    return this.http.delete(this.deleteURL);
  }

  private updateURL = 'http://localhost:8080/user';
  updateDetailById(payload: any) {
    return this.http.put<any>(
      this.updateURL + `/update/${payload?.id}`,
      payload
    );
  }
}
