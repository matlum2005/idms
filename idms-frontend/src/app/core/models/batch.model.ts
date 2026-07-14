export interface Batch {
  id?: number;
  batchName: string; // Auto-generated: B-YYYY-MM
  startDate: string;
  endDate: string; // Auto-calculated: startDate + 6 months
  totalInterns?: number;
  freeCount?: number;
  premiumCount?: number;
}

