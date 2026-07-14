import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';

import { BatchService } from '../batch.service';
import { BatchOverview } from '../models/batch.models';
import { Intern } from '../models/batch.models';


@Component({
  selector: 'app-batch-overview',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,

    MatCardModule,
    MatGridListModule,

    MatButtonModule,
    MatProgressSpinnerModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './batch-overview.component.html',
  styleUrl: './batch-overview.component.scss',
})
export class BatchOverviewComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly batchService = inject(BatchService);

  batchId?: number;
  isLoading = true;
  error?: string;

  overview?: BatchOverview;

  // Table
  internsDataSource = new MatTableDataSource<Intern>([]);
  displayedColumns: string[] = ['internId', 'name', 'email', 'mobile', 'idType'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.batchId = id ? Number(id) : undefined;

    if (!this.batchId) {
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.batchService.getById(this.batchId).subscribe({
      next: (data) => {
        // Backend returns an overview-like object as per your API contract.
        this.overview = data as unknown as BatchOverview;

        const interns = this.overview?.interns ?? [];
        this.internsDataSource.data = interns;

        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load batch overview.';
        this.isLoading = false;
        console.error(err);
      },
    });
  }

  ngAfterViewInit(): void {
    this.internsDataSource.paginator = this.paginator;
    this.internsDataSource.sort = this.sort;
  }

  get totalInterns(): number {
    return this.overview?.totalInternCount ?? this.overview?.totalInternCount ?? 0;
  }

  get freeIds(): number {
    return this.overview?.freeIdsCount ?? 0;
  }

  get premiumIds(): number {
    return this.overview?.premiumIdsCount ?? 0;
  }

  get batchTitle(): string {
    const name = this.overview?.batchName;
    if (name) return name;
    return this.batchId ? `Batch ${this.batchId}` : 'Batch';
  }

  get idTypeLabel(): (idType: string) => string {
    return (idType) => idType;
  }
}



