import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private readonly notification: NotificationService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((err: unknown) => {
        const e = err as HttpErrorResponse;
        const message =
          e?.error?.message || e?.error?.title || e?.message || 'Something went wrong.';
        // Avoid spamming on 401 for now (could redirect to login in real app)
        if (e?.status !== 401) {
          this.notification.show(message, 'error');
        }
        return throwError(() => err);
      })
    );
  }
}

