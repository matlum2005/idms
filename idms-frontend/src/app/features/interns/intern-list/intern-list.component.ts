import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatTableDataSource } from '@angular/material/table';

import { Intern } from '../models/intern.models';
import { InternService } from '../intern.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-intern-list',
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
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './intern-list.component.html',
  styleUrl: './intern-list.component.scss',
})
export class InternListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'mobileNumber',
    'batchId',
    'idCardType',
    'dateOfJoining',
    'actions',
  ];

  dataSource = new MatTableDataSource<Intern>([]);

  searchText = '';
  selectedBatchId: number | null = null;
  selectedIdCardType: 'FREE' | 'PREMIUM' | null = null;

  // Placeholder: batch dropdown data (will be hooked in later)
  batches: Array<{ id: number; name: string }> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly internService: InternService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadInterns();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilters(): void {
    this.loadInterns();
  }

  onSearchChange(): void {
    // Debounce can be added in the next iteration
    this.applyFilters();
  }

  loadInterns(): void {
    // Placeholder for now: API wiring will be added next iteration.
    // Keeping component compile-safe for scaffolding stage.
    this.dataSource.data = [];
  }

  onDelete(id?: number): void {
    if (!id) return;
    // Placeholder
    this.snackBar.open('Delete action (placeholder)', 'Close', { duration: 2000 });
  }
}


