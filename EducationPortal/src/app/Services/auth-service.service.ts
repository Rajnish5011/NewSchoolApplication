import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Role {
  roleId: number;
  roleName: string;
}


export interface DashboardMetrics {
  totalStudents: number;
  totalClasses: number;
  totalTeachers: number;
  feesCollectedThisMonth: number;
  attendanceTodayPercentage: number;
}


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService  {
  private baseUrl = 'https://localhost:44320/api';
  private token: string | null = null;
  constructor(private http: HttpClient) { }

  
  login(email: string, password: string) {
    return this.http.get(`${this.baseUrl}/auth/login`, {
      params: { email, passWordHash: password }
    });
  }
register(user: any, roleId: number) {
  return this.http.post(
    `https://localhost:44320/api/auth/register?roleId=${roleId}`,
    user // this becomes userdto in backend
  );
}


  private userRole = new BehaviorSubject<string>(
    typeof window !== 'undefined' && window.localStorage
      ? localStorage.getItem('role') || 'Guest'
      : 'Guest'
  ); role$ = this.userRole.asObservable();

  setRole(role: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('role', role);
    }
    this.userRole.next(role);
  }

  getRole(): string {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('role') || 'Guest';
    }
    return 'Guest'; // fallback for SSR or Node
  }
 getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}/auth/roles`);
  }
  
  getDashboardMetrics(): Observable<DashboardMetrics> {
    return this.http.get<DashboardMetrics>(`${this.baseUrl}/dashboard/totalCounts`);
  }
  getAttdanceCalendar(startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/dashboard/attendanceCalendar`, {
      params: { startDate, endDate }
    });
  }
}
//this.http.get<any[]>(`/api/attendanceCalendar?startDate=${startDate}&endDate=${endDate}`)