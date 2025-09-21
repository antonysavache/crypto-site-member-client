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
    path: 'exchanges',
    loadComponent: () => import('./pages/exchanges/exchanges.component').then(m => m.ExchangesComponent)
  },
  {
    path: 'security',
    loadComponent: () => import('./pages/security/security.component').then(m => m.SecurityComponent)
  },
  {
    path: 'crypto-risks-security',
    loadComponent: () => import('./pages/crypto-risks-security/crypto-risks-security.component').then(m => m.CryptoRisksSecurityComponent)
  },
  {
    path: 'how-to-buy-eth-uk',
    loadComponent: () => import('./pages/how-to-buy-eth-uk/how-to-buy-eth-uk.component').then(m => m.HowToBuyEthUkComponent)
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
    loadComponent: () => import('./pages/bitcoin-origin-new/bitcoin-origin-new.component').then(m => m.BitcoinOriginNewComponent)
  },
  {
    path: 'ethereum-review',
    loadComponent: () => import('./pages/ethereum-review/ethereum-review.component').then(m => m.EthereumReviewComponent)
  },
  {
    path: 'storybook',
    loadComponent: () => import('./pages/storybook/storybook.component').then(m => m.StorybookComponent)
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
    path: 'uk-crypto-tax',
    loadComponent: () => import('./pages/uk-crypto-tax/uk-crypto-tax.component').then(m => m.UkCryptoTaxComponent)
  },
];
