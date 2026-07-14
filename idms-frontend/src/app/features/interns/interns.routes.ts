import { Routes } from '@angular/router';

export const INTERNS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./intern-list/intern-list.component').then((m) => m.InternListComponent),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./intern-add/intern-add.component').then((m) => m.InternAddComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./intern-edit/intern-edit.component').then((m) => m.InternEditComponent),
  },
  {
    // Required: /interns/view/:id
    path: 'view/:id',
    loadComponent: () =>
      import('./intern-details/intern-details.component').then(
        (m) => m.InternDetailsComponent
      ),
  },
  {
    // Backward-compatible alias: /interns/:id
    path: ':id',
    loadComponent: () =>
      import('./intern-details/intern-details.component').then(
        (m) => m.InternDetailsComponent
      ),
  },
];



