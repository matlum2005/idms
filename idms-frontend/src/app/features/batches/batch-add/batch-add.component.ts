import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MatSnackBar } from '@angular/material/snack-bar';

import { RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Batch } from '../models/batch.models';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterLink,
  ],
  templateUrl: './batch-add.component.html',
  styleUrl: './batch-add.component.scss',
})
export class BatchAddComponent {
  private fb!: FormBuilder;
  form = this.fb.group({
    startDate: [null as Date | null, [Validators.required]],
    endDate: [{ value: null as Date | null, disabled: true }],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly batchService: BatchService,
    private readonly snackBar: MatSnackBar
  ) {
    this.fb = this._fb;
    // Re-create form after fb initialization.
    this.form = this.fb.group({
      startDate: [null as Date | null, [Validators.required]],
      endDate: [{ value: null as Date | null, disabled: true }],
    });
  }




  // Scaffold-only; UI + validation wired; API integration kept in next iteration.
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

    const startDate = this.form.value.startDate;
    const endDate = this.form.getRawValue().endDate;

    // Placeholder payload mapping
    const payload: Batch = {
      startDate: startDate ? this.toIsoDate(startDate) : '',
      endDate: endDate ? this.toIsoDate(endDate) : undefined,
    };

    // Placeholder: API call in next iteration
    this.snackBar.open('Create Batch (placeholder)', 'Close', { duration: 2000 });
  }

  private toIsoDate(d: Date): string {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
}

