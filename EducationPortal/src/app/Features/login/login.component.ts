import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
imports: [ ReactiveFormsModule]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginform:FormGroup;
showPassword = false;
 constructor(private fb: FormBuilder) {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
   onSubmit() {
    if (this.loginform.valid) {
      console.log('Login Data:', this.loginform.value);
      // Call AuthService.login() here
    }
  }
    togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
