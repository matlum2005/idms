import { Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InternListComponent } from './pages/interns/intern-list/intern-list.component';
import { InternAddComponent } from './pages/interns/intern-add/intern-add.component';
import { InternEditComponent } from './pages/interns/intern-edit/intern-edit.component';
import { InternDetailsComponent } from './pages/interns/intern-details/intern-details.component';

import { BatchListComponent } from './pages/batches/batch-list/batch-list.component';
import { BatchAddComponent } from './pages/batches/batch-add/batch-add.component';
import { BatchEditComponent } from './pages/batches/batch-edit/batch-edit.component';
import { BatchOverviewComponent } from './pages/batches/batch-overview/batch-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'interns',
        children: [
          { path: '', component: InternListComponent },
          { path: 'add', component: InternAddComponent },
          { path: 'edit/:id', component: InternEditComponent },
          { path: ':id', component: InternDetailsComponent },
        ],
      },
      {
        path: 'batches',
        children: [
          { path: '', component: BatchListComponent },
          { path: 'add', component: BatchAddComponent },
          { path: 'edit/:id', component: BatchEditComponent },
          { path: ':id', component: BatchOverviewComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

