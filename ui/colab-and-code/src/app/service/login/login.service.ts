// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  login(username: string, password: string): Observable<any> {
    const loginRequest = { username, password };
    return this.http.post(this.apiUrl, loginRequest,
      {
        headers: new HttpHeaders({
          'Jwt-Interceptor-Skip': 'true'
        }), responseType: 'text'
      }
    ).pipe(
      tap(response => this.handleAuthentication(response))
    );
  }
  private handleAuthentication(response: any): void {
    const token = response; // Adjust accordingly based on your backend response
    this.jwtService.setToken(token);
  }
}
