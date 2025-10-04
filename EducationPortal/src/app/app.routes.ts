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

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'examination', component: ExaminationComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  //{ path: '**', redirectTo: 'login' }
];
