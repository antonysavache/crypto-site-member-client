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
    path: 'article',
    loadComponent: () => import('./pages/article/article.component').then(m => m.ArticleComponent)
  },
  {
    path: 'coinbase-review',
    loadComponent: () => import('./pages/coinbase-review/coinbase-review.component').then(m => m.CoinbaseReviewComponent)
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
