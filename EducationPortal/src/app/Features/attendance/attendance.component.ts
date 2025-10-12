import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // <-- import plugin
import { FullCalendarModule } from '@fullcalendar/angular';
import { dE } from '@fullcalendar/core/internal-common';


@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [FormsModule, CommonModule, FullCalendarModule],
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'] // <-- fixed typo
})
export class AttendanceComponent implements OnInit {
showAllAttendance() {
throw new Error('Method not implemented.');
}

  attendanceEvents: any[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin], // <-- register plugin here
    events: this.attendanceEvents
  };

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    const startDate = '2025-10-01';
    const endDate = '2025-10-31';

    this.authService.getAttdanceCalendar(startDate, endDate).subscribe(data => {
      debugger
      this.attendanceEvents = data.map(a => ({
        title: a.AttendanceStatus,
        date: a.AttendanceDate,
        color: a.AttendanceStatus === 'Present' ? 'green'
               : a.AttendanceStatus === 'Absent' ? 'red'
               : 'orange'
      }));

      // Update calendar events dynamically
      this.calendarOptions.events = this.attendanceEvents;
    });
  }

  filterAttendance(status: string) {
  this.calendarOptions = {
    ...this.calendarOptions,
    events: this.attendanceEvents.filter(e => e.title === status)
  };
}

}
