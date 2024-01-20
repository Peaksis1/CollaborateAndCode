import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:8080/register'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {

    const registrationRequest = { username, password };
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Jwt-Interceptor-Skip': 'true'
      }),
      responseType: 'text'
    };
    return this.http.post(this.apiUrl, registrationRequest, httpOptions);
  }
}