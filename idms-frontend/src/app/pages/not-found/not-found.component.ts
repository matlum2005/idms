import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a class="link" routerLink="/dashboard">Go to Dashboard</a>
    </div>
  `,
  styles: [
    `.page{padding:24px;max-width:720px;margin:0 auto;font-family:Arial,Helvetica,sans-serif}`,
    `h1{margin:0 0 8px 0}`,
    `.link{display:inline-block;margin-top:12px;color:#1976d2;text-decoration:none}`,
  ],
})
export class NotFoundComponent {}

