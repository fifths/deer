import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PreloaderComponent} from './preloader/preloader.component';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'preloader',
        component: PreloaderComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'},
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
