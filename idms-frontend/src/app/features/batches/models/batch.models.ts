import { Intern, IdCardType } from '../../interns/models/intern.models';

// Response shape for GET /batches/{id}
// Note: names may differ slightly between backend implementations; adjust if needed.
export interface BatchOverview {
  id?: number;
  batchName?: string;
  startDate?: string; // ISO date (YYYY-MM-DD)
  endDate?: string; // ISO date (YYYY-MM-DD)
  totalInternCount?: number;

  freeIdsCount?: number;
  premiumIdsCount?: number;

  interns?: Intern[];
}

export interface Batch {
  id?: number;
  startDate: string; // ISO date (YYYY-MM-DD)
  endDate?: string; // ISO date (YYYY-MM-DD)
  totalInternCount?: number;
  freeCount?: number;
  premiumCount?: number;
}

export type { IdCardType, Intern };


