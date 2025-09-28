import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
private baseUrl = 'https://localhost:44320/api';
  private token: string | null = null;
  constructor(private http: HttpClient) {}

login(email: string, password: string) {
    return this.http.get(`${this.baseUrl}/auth/login`, {
      params: { email, passWordHash: password }
    });
  }
  private userRole = new BehaviorSubject<string>(localStorage.getItem('role') || 'Guest');
  role$ = this.userRole.asObservable();

  setRole(role: string) {
    localStorage.setItem('role', role);
    this.userRole.next(role);
  }

  getRole(): string {
    return localStorage.getItem('role') || 'Guest';
  }
}
