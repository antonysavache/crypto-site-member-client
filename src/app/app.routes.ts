import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'members',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) // Пока заглушка
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) // Пока заглушка
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
