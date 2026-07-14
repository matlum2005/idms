import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Intern, IdCardType } from '../models/intern.model';

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  page: number; // 0-based
  size: number;
}

export interface GetAllInternsParams {
  batchId?: number;
  idCardType?: IdCardType;
  search?: string;
  page?: number; // 0-based
  size?: number;
}

@Injectable({ providedIn: 'root' })
export class InternService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  getAll(params?: GetAllInternsParams): Observable<PageResponse<Intern>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.batchId != null) httpParams = httpParams.set('batchId', String(params.batchId));
      if (params.idCardType) httpParams = httpParams.set('idCardType', params.idCardType);
      if (params.search) httpParams = httpParams.set('search', params.search);
      if (params.page != null) httpParams = httpParams.set('page', String(params.page));
      if (params.size != null) httpParams = httpParams.set('size', String(params.size));
    }

    return this.http.get<PageResponse<Intern>>(`${this.baseUrl}/interns`, { params: httpParams });
  }

  getById(id: number): Observable<Intern> {
    return this.http.get<Intern>(`${this.baseUrl}/interns/${id}`);
  }

  create(intern: Intern): Observable<Intern> {
    return this.http.post<Intern>(`${this.baseUrl}/interns`, intern);
  }

  update(id: number, intern: Intern): Observable<Intern> {
    return this.http.put<Intern>(`${this.baseUrl}/interns/${id}`, intern);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/interns/${id}`);
  }
}

