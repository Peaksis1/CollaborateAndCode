// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  isJwtValid(): boolean {
    // Implement logic to check JWT validity with your Spring Boot backend
    // For example, make an HTTP request to validate the token
    // Return true if valid, false otherwise
    // This method might involve making an HTTP request to your Spring Boot backend
    // to verify the token validity.
    return true; // Replace this with actual validation logic
  }
}
