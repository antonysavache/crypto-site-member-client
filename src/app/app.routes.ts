import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/coinbase-review',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: '/coinbase-review',
    pathMatch: 'full'
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
    path: 'kraken-review',
    loadComponent: () => import('./pages/kraken-review/kraken-review.component').then(m => m.KrakenReviewComponent)
  },
  {
    path: 'bitcoin-origin',
    loadComponent: () => import('./pages/bitcoin-origin/bitcoin-origin.component').then(m => m.BitcoinOriginComponent)
  },
  {
    path: 'members',
    redirectTo: '/coinbase-review'
  },
  {
    path: 'settings',
    redirectTo: '/coinbase-review'
  },
  {
    path: '**',
    redirectTo: '/coinbase-review'
  }
];
