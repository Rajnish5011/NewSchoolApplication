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
   ngOnInit() {
  const userData = localStorage.getItem('user');
    // if (userData) {
    //   this.user = JSON.parse(userData);
    //   this.role = this.user.roleName; // extract role from the object
    // }

    // console.log('User:', this.user); // {"userId":1,"fullName":"Rajnish Kumar Gupta","phone":"9589029624","status":true,"roleName":"Admin"}
    // console.log('Role:', this.role); 
}
    }
  

