import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
      user: any;        // full user object
  role: string = ''; // just roleName
  showProfile = false;
   ngOnInit() {
  const userData = localStorage.getItem('user');
  console.log('User Data from localStorage:', userData);
    if (userData) {
      this.user = JSON.parse(userData);
      this.role = this.user.roleName; // extract role from the object
    }

   
}
 toggleProfile() {
    this.showProfile = !this.showProfile;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload(); // Reload the page to reset the state
    window.location.href = '/login'; // Redirect to login page
  }
    }
  

