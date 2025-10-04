import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService, Role } from '../../Services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  roles: Role[] = [];

  constructor(private fb: FormBuilder, private authService: AuthServiceService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Mobile: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  role: [0, Validators.required] // default value 0

    });
  }
  ngOnInit(): void {
    // Fetch roles from AuthService
    this.authService.getRoles().subscribe({
      next: (res: Role[]) => {
        debugger
        this.roles = res;
      },
      error: (err) => {
        console.error('Failed to load roles', err);
      }
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const roleId = Number(formData.role);
    
        console.log('Register Data:', formData);
        const userDto = {
          Email: formData.email,
          PasswordHash: formData.password,
          FullName: formData.name,
          Phone: formData.Mobile,
          Status: true,      // default status
          RoleName: ''       // optional, backend uses roleId
        };

        this.authService.register(userDto, roleId).subscribe({
          next: (res) => {
            console.log('Registration successful', res);
            // You can reset the form or navigate after success
            this.registerForm.reset();
          },
          error: (err) => {
            console.error('Registration failed', err);
          },
          complete: () => {
            console.log('Registration request completed');
          }
        });
      } else {
        console.warn('Form is invalid');
        this.registerForm.markAllAsTouched(); // highlight errors
      }
    }

  }
