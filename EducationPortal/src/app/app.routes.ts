import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./Features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Features/register/register.component').then(m => m.RegisterComponent)
  },
   {
    path: 'about',
    loadComponent: () =>
      import('./Features/about/about.component').then(m => m.AboutComponent)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
