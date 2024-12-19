import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component'),
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'hero', component: HomeComponent },
            { path: '**', redirectTo: 'hero' }
        ]
    }
]

export default routes;