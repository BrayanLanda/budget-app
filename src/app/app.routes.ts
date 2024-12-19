import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./auth/auth.routes')
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes')
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
