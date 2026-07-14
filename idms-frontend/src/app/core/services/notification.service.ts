import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export type NotificationVariant = 'success' | 'error' | 'info';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar) {}

  show(message: string, variant: NotificationVariant = 'info'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3500,
      panelClass:
        variant === 'success'
          ? ['snackbar-success']
          : variant === 'error'
            ? ['snackbar-error']
            : ['snackbar-info'],
    });
  }
}

