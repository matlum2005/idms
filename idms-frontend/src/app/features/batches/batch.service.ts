import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


import { environment } from '../../../environments/environment';
import { Batch } from './models/batch.models';

@Injectable({ providedIn: 'root' })
export class BatchService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  getById(id: number): Observable<Batch> {
    return this.http
      .get<Batch>(`${this.baseUrl}/batches/${id}`)
      .pipe(catchError((err: unknown) => throwError(() => err)));
  }

  create(batch: Batch): Observable<Batch> {
    return this.http
      .post<Batch>(`${this.baseUrl}/batches`, batch)
      .pipe(catchError((err: unknown) => throwError(() => err)));
  }

  update(id: number, batch: Batch): Observable<Batch> {
    return this.http
      .put<Batch>(`${this.baseUrl}/batches/${id}`, batch)
      .pipe(catchError((err: unknown) => throwError(() => err)));
  }

  delete(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/batches/${id}`)
      .pipe(catchError((err: unknown) => throwError(() => err)));
  }
}



