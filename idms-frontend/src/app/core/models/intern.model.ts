export type IdCardType = 'FREE' | 'PREMIUM';

export interface Intern {
  id?: number;
  internId: string; // Auto-generated: EMP20241129-001 or TDA20241129-001
  name: string;
  email: string;
  mobile: string;
  idCardType: IdCardType;
  dateOfJoining: string; // ISO date string
  batchId: number;
  batchName?: string;
}

