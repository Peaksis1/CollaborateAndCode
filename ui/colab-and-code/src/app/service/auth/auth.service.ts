// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtService } from '../jwt/jwt.service';
import { Observable, map, tap } from 'rxjs';
import { Console } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = 'http://localhost:8080/isJwtValid'

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  async isJwtValid(): Promise<boolean> {
    const token = this.jwtService.getToken();
    if (token != undefined || token != null) {
      const response = await this.getResponse();
      return response !== undefined ? response : false;
    }
    return false;
  }

  async getResponse(): Promise<boolean | undefined> {
    const token = this.jwtService.getToken();

    try {
      const response = await this.http.get(this.apiUrl, {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        }),
        responseType: 'text'
      }).toPromise();

      return response === 'true';
    } catch (error) {
      console.error('Error occurred while fetching response:', error);
      return undefined;
    }
  }


}
