import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { Batch } from '../models/batch.models';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './batch-edit.component.html',
  styleUrl: './batch-edit.component.scss',
})
export class BatchEditComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  private readonly batchService = inject(BatchService);
  private readonly snackBar = inject(MatSnackBar);

  form = this.fb.group({
    startDate: [null as Date | null, [Validators.required]],
    endDate: [{ value: null as Date | null, disabled: true }],
  });

  ngOnInit(): void {
    // Scaffold-only: load + patch in next iteration
  }

  onStartDateChange(e: MatDatepickerInputEvent<Date>): void {
    const start = e.value;
    if (!start) return;

    const end = new Date(start);
    end.setMonth(end.getMonth() + 6);

    this.form.patchValue({
      endDate: end,
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.snackBar.open('Edit Batch (placeholder)', 'Close', { duration: 2000 });
  }
}

