export type IdCardType = 'FREE' | 'PREMIUM';

export interface Intern {
  id?: number;
  name: string;
  email: string;
  mobileNumber: string;
  batchId: number;
  idCardType: IdCardType;
  dateOfJoining: string; // ISO date (YYYY-MM-DD)
}

