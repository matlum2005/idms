import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

      {
        path: 'dashboard',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
      },

      {
        path: 'interns',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./features/interns/interns.routes').then((m) => m.INTERNS_ROUTES),
      },

      {
        path: 'batches',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./features/batches/batches.routes').then((m) => m.BATCHES_ROUTES),
      },

      { path: '404', component: NotFoundComponent },

      // Redirect any unknown route to 404.
      { path: '**', redirectTo: '404' },
    ],
  },
];


