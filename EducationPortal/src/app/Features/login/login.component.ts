import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


import { HttpClientModule } from '@angular/common/http'; // <-- add this
import { Router } from '@angular/router';


imports: [ReactiveFormsModule]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  providers: [AuthServiceService], // provide it here


  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform: FormGroup;
  showPassword = false;
  constructor(private fb: FormBuilder, private AuthServiceService: AuthServiceService, private router: Router) {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.loginform.valid) {
      debugger
      this.AuthServiceService.login(this.loginform.value.email, this.loginform.value.password)
        .subscribe(
          (response: any) => { // ✅ parentheses around the parameter
           
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user.user));
            const role = response.user.user.roleName;  
            this.router.navigate(['/dashboard']);
            console.log('Login successful!', 'Success');
          },
          (error) => {
            console.warn('Invalid email or password.', 'Error');
          }
        );
    } else {
      console.warn('Form is invalid');
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
