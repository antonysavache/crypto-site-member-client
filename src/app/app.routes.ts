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
  // Exchanges Category
  {
    path: 'exchanges',
    loadComponent: () => import('./pages/exchanges/exchanges.component').then(m => m.ExchangesComponent)
  },
  {
    path: 'exchanges/coinbase-review',
    loadComponent: () => import('./pages/coinbase-review/coinbase-review.component').then(m => m.CoinbaseReviewComponent)
  },
  {
    path: 'exchanges/kraken-review',
    loadComponent: () => import('./pages/kraken-review/kraken-review.component').then(m => m.KrakenReviewComponent)
  },
  // Coins Review Category
  {
    path: 'coins',
    loadComponent: () => import('./pages/coins/coins.component').then(m => m.CoinsComponent)
  },
  {
    path: 'coins/bitcoin-review',
    loadComponent: () => import('./pages/bitcoin-origin-new/bitcoin-origin-new.component').then(m => m.BitcoinOriginNewComponent)
  },
  {
    path: 'coins/ethereum-review',
    loadComponent: () => import('./pages/ethereum-review/ethereum-review.component').then(m => m.EthereumReviewComponent)
  },
  // Guides Category
  {
    path: 'guides',
    loadComponent: () => import('./pages/guides/guides.component').then(m => m.GuidesComponent)
  },
  {
    path: 'guides/how-to-buy-eth-uk',
    loadComponent: () => import('./pages/how-to-buy-eth-uk/how-to-buy-eth-uk.component').then(m => m.HowToBuyEthUkComponent)
  },
  // Security Category
  {
    path: 'security',
    loadComponent: () => import('./pages/security/security.component').then(m => m.SecurityComponent)
  },
  {
    path: 'security/crypto-risks',
    loadComponent: () => import('./pages/crypto-risks-security/crypto-risks-security.component').then(m => m.CryptoRisksSecurityComponent)
  },
  {
    path: 'security/uk-crypto-tax',
    loadComponent: () => import('./pages/uk-crypto-tax/uk-crypto-tax.component').then(m => m.UkCryptoTaxComponent)
  },
  // Legacy redirects
  {
    path: 'coinbase-review',
    redirectTo: '/exchanges/coinbase-review'
  },
  {
    path: 'kraken-review',
    redirectTo: '/exchanges/kraken-review'
  },
  {
    path: 'bitcoin-origin',
    redirectTo: '/coins/bitcoin-review'
  },
  {
    path: 'ethereum-review',
    redirectTo: '/coins/ethereum-review'
  },
  {
    path: 'how-to-buy-eth-uk',
    redirectTo: '/guides/how-to-buy-eth-uk'
  },
  {
    path: 'crypto-risks-security',
    redirectTo: '/security/crypto-risks'
  },
  {
    path: 'uk-crypto-tax',
    redirectTo: '/security/uk-crypto-tax'
  },
  {
    path: 'storybook',
    loadComponent: () => import('./pages/storybook/storybook.component').then(m => m.StorybookComponent)
  },
  {
    path: 'members',
    redirectTo: '/exchanges/coinbase-review'
  },
  {
    path: 'settings',
    redirectTo: '/exchanges/coinbase-review'
  }
];
