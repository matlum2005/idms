import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


import { environment } from '../../../environments/environment';
import { Intern } from './models/intern.models';

@Injectable({ providedIn: 'root' })
export class InternService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  getById(id: number): Observable<Intern> {
    return this.http
      .get<Intern>(`${this.baseUrl}/interns/${id}`)
      .pipe(catchError((err: unknown) => throwError(() => err)));
  }

  create(intern: Intern): Observable<Intern> {
    return this.http
      .post<Intern>(`${this.baseUrl}/interns`, intern)
      .pipe(catchError((err: unknown) => throwError(() => err)));
  }

  update(id: number, intern: Intern): Observable<Intern> {
    return this.http
      .put<Intern>(`${this.baseUrl}/interns/${id}`, intern)
      .pipe(catchError((err: unknown) => throwError(() => err)));
  }

  delete(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/interns/${id}`)
      .pipe(catchError((err: unknown) => throwError(() => err)));
  }
}



