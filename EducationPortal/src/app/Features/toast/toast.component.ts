import { Component, OnInit } from '@angular/core';
import { ToastMessage, ToastService } from '../../Services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit   {
  toasts: ToastMessage[] = [];
  constructor(private toastService: ToastService) {}
  ngOnInit() {
    this.toastService.toastState$.subscribe(toast => {
      this.toasts.push(toast);
      setTimeout(() => this.removeToast(toast), 3000); // auto-hide after 3 sec
    });
  }
   removeToast(toast: ToastMessage) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
