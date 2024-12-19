import { Routes } from "@angular/router";
import { ListBudgetComponent } from "./list-budget/list-budget.component";
import { ProfileComponent } from "./profile/profile.component";


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component'),
        children: [
            { path: 'list', component: ListBudgetComponent },
            { path: 'profile', component: ProfileComponent },
            { path: '**', redirectTo: 'list'}
        ]
    }
]

export default routes;