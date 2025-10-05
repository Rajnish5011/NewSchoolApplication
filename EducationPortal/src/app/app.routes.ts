import { Routes } from '@angular/router';
import { LoginComponent } from './Features/login/login.component';
import { RegisterComponent } from './Features/register/register.component';
import { AboutComponent } from './Features/about/about.component';
import { DashboardComponent } from './Features/dashboard/dashboard.component';
import { ContactusComponent } from './Features/contactus/contactus.component';
import { AdmissionComponent } from './Features/admission/admission.component';
import { FeesComponent } from './Features/fees/fees.component';
import { AdminComponent } from './Features/admin/admin.component';
import { AttendanceComponent } from './Features/attendance/attendance.component';
import { ExaminationComponent } from './Features/examination/examination.component';
import { TransportComponent } from './Features/transport/transport.component';
import { AccountsComponent } from './Features/accounts/accounts.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'contactus', component: ContactusComponent },
  { path: 'admission', component: AdmissionComponent, canActivate: [AuthGuard] },
  { path: 'fees', component: FeesComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'attendance', component: AttendanceComponent , canActivate: [AuthGuard]},
  { path: 'examination', component: ExaminationComponent, canActivate: [AuthGuard] },
  { path: 'transport', component: TransportComponent, canActivate: [AuthGuard] },
  { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  //{ path: '**', redirectTo: 'login' }
];
