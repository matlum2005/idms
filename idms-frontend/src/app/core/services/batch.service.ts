import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Batch } from '../models/batch.model';
import { Intern } from '../models/intern.model';

@Injectable({ providedIn: 'root' })
export class BatchService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.baseUrl}/batches`);
  }

  getById(id: number): Observable<Batch> {
    return this.http.get<Batch>(`${this.baseUrl}/batches/${id}`);
  }

  create(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(`${this.baseUrl}/batches`, batch);
  }

  update(id: number, batch: Batch): Observable<Batch> {
    return this.http.put<Batch>(`${this.baseUrl}/batches/${id}`, batch);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/batches/${id}`);
  }

  getInternsByBatch(batchId: number): Observable<Intern[]> {
    return this.http.get<Intern[]>(`${this.baseUrl}/batches/${batchId}/interns`);
  }
}

