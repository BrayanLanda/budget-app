import { Routes } from '@angular/router';
import { authGuard } from './_guard/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./auth/auth.routes')
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.routes')
            },
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
