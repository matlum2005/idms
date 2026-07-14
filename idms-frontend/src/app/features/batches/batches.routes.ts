import { Routes } from '@angular/router';

export const BATCHES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./batch-list/batch-list.component').then((m) => m.BatchListComponent),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./batch-add/batch-add.component').then((m) => m.BatchAddComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./batch-edit/batch-edit.component').then((m) => m.BatchEditComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./batch-overview/batch-overview.component').then((m) => m.BatchOverviewComponent),
  },
];


