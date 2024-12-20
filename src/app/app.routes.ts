import { Routes } from '@angular/router';
import { authGuard } from './_guard/auth.guard';
import { isNotAuthGuard } from './_guard/is-not-auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./auth/auth.routes'),
    canActivate: [isNotAuthGuard],
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes'),
      },
    ],
  },
];
