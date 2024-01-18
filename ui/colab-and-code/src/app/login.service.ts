// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginRequest = { username, password };
    return this.http.post(this.apiUrl, loginRequest);
  }
}
