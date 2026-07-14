import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, of } from 'rxjs';

export type DashboardTotals = {
  totalInterns: number;
  totalBatches: number;
  freeIds: number;
  premiumIds: number;
};


@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  getDashboard() {
    return this.http.get<DashboardTotals>(`${this.baseUrl}/dashboard`).pipe(
      catchError(() => of({ totalInterns: 0, totalBatches: 0, freeIds: 0, premiumIds: 0 }))
    );
  }
}

