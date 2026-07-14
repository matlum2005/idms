import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { RouterLink } from '@angular/router';

import { Batch } from '../models/batch.models';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.scss',
})
export class BatchListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['startDate', 'endDate', 'totalInternCount', 'actions'];

  dataSource = new MatTableDataSource<Batch>([]);

  searchText = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly batchService: BatchService, private readonly snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadBatches();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilters(): void {
    this.loadBatches();
  }

  loadBatches(): void {
    // Scaffold-only: replace with GET /batches API integration later.
    // Keeping table compile-safe now.
    this.dataSource.data = [];
  }

  onDelete(id?: number): void {
    if (!id) return;
    this.snackBar.open('Delete action (placeholder)', 'Close', { duration: 2000 });
  }
}

