import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path:'home',
        loadChildren: () => import('./home-page-module/home-page-module.module').then(m => m.HomePageModuleModule)
    },
    { path: '**', component: LoginComponent },
];
