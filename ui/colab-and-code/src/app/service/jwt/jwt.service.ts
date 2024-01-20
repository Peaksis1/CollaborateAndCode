// jwt.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private readonly JWT_TOKEN_KEY = 'jwtToken';

  constructor() { }

  setToken(token: string, useCookie: boolean = false): void {
    if (useCookie) {
      this.setCookie(this.JWT_TOKEN_KEY, token);
    } else {
      localStorage.setItem(this.JWT_TOKEN_KEY, token);
    }
  }

  getToken(): string | null | undefined {
    return localStorage.getItem(this.JWT_TOKEN_KEY) || this.getCookie(this.JWT_TOKEN_KEY);
  }

  removeToken(useCookie: boolean = false): void {
    if (useCookie) {
      this.removeCookie(this.JWT_TOKEN_KEY);
    } else {
      localStorage.removeItem(this.JWT_TOKEN_KEY);
    }
  }

  private setCookie(name: string, value: string): void {
    document.cookie = `${name}=${value};path=/;`;
  }

  private getCookie(name: string): string | null | undefined {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
  }

  private removeCookie(name: string): void {
    document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  }
}
