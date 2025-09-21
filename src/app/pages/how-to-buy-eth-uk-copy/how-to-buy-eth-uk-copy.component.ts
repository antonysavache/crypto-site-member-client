import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KRAKEN_URL } from '../../shared/constants/global-urls';

// Импортируем ваши готовые UI компоненты
import { TldrComponent } from '../../shared/ui/tldr/tldr.component';
import { TableOfContentsComponent } from '../../shared/ui/table-of-contents/table-of-contents.component';
import { StickyCTABannerComponent } from '../../shared/ui/sticky-cta-banner/sticky-cta-banner.component';
import { MaterialComparisonTableComponent, MaterialComparisonColumn, MaterialComparisonRow } from '../../shared/ui/material-comparison-table/material-comparison-table.component';
import { BulletListComponent } from '../../shared/ui/bullet-list/bullet-list.component';
import { ProTipComponent } from '../../shared/ui/pro-tip/pro-tip.component';

@Component({
  selector: 'app-how-to-buy-eth-uk',
  templateUrl: './how-to-buy-eth-uk-copy.component.html',
  styleUrl: './how-to-buy-eth-uk-copy.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    TldrComponent,
    TableOfContentsComponent,
    StickyCTABannerComponent,
    MaterialComparisonTableComponent,
    BulletListComponent,
    ProTipComponent
  ]
})
export class HowToBuyEthUkCopyComponent {

  krakenUrl = KRAKEN_URL;

  // Quick Verdict data for TLDR component
  quickVerdict = [
    'Ethereum remains one of the most important crypto assets in 2025, thanks to its role in powering DeFi, NFTs and Layer-2 scaling. For UK investors, ETH is worth considering as a medium-to-long-term allocation — especially if you plan to stake and earn yield.',
    'The easiest way to get started is with a regulated exchange that offers ETH/GBP trading and low-cost GBP deposits. Kraken is our top recommendation for its FCA registration, deep ETH/GBP liquidity and on-platform staking.'
  ];

  // Why Kraken bullet points
  krakenAdvantages = [
    '<strong>ETH/GBP liquidity:</strong> tight spreads and fast execution.',
    '<strong>Staking available:</strong> earn ETH rewards directly on the platform.',
    '<strong>GBP rails:</strong> instant Faster Payments and same-day CHAPS transfers.'
  ];

  // Route options with anchor links
  routeOptions = [
    '<strong><a href="#buying-eth-with-creditdebit-card" style="color: #6366f1; text-decoration: none;">Beginner (Quick Start):</a></strong> Buy with Card (instant) — the fastest way to get a small first amount.',
    '<strong><a href="#buying-eth-with-bank-account-faster-payments" style="color: #6366f1; text-decoration: none;">Cost-conscious (recurring buys):</a></strong> Buy with Bank Transfer (Faster Payments) — near-instant deposits with minimal cost.',
    '<strong><a href="#buying-eth-with-chaps" style="color: #6366f1; text-decoration: none;">High-volume purchase:</a></strong> Buy with CHAPS — same-day settlement for large transfers.',
    '<strong><a href="#secure-storage" style="color: #6366f1; text-decoration: none;">Planning to earn yield:</a></strong> Buy first, then head to Staking Options.'
  ];

  // Exchange comparison table data
  comparisonColumns: MaterialComparisonColumn[] = [
    { key: 'feature', title: 'Feature', type: 'text' },
    { key: 'kraken', title: 'Kraken', type: 'highlight' },
    { key: 'coinbase', title: 'Coinbase', type: 'text' },
    { key: 'binance', title: 'Binance', type: 'text' },
    { key: 'ziglu', title: 'Ziglu', type: 'text' }
  ];

  comparisonRows: MaterialComparisonRow[] = [
    {
      feature: 'ETH/GBP pair',
      kraken: '✅ Deep liquidity',
      coinbase: '✅ Available',
      binance: '✅ Available (UK features limited)',
      ziglu: '✅ Available'
    },
    {
      feature: 'Order types',
      kraken: 'Market, Limit, Stop; advanced via Pro',
      coinbase: 'Simple buy; Advanced offers limit/stop',
      binance: 'Full suite (some UK restrictions)',
      ziglu: 'Market only'
    },
    {
      feature: 'Spot (Pro) fees',
      kraken: 'Maker 0.16% / Taker 0.26% (volume discounts); Instant Buy higher',
      coinbase: '~1.49% retail buy spread',
      binance: '0.10% base (regional limits apply)',
      ziglu: 'Fixed spread (higher effective cost)'
    },
    {
      feature: 'ETH staking',
      kraken: '✅ In-platform (rate shown in app)',
      coinbase: 'Limited availability',
      binance: '✅ Available (regional limits)',
      ziglu: '❌ Not supported'
    },
    {
      feature: 'GBP deposits',
      kraken: 'Faster Payments (free), CHAPS (same-day)',
      coinbase: 'Faster Payments, cards (higher fee)',
      binance: 'Limited GBP via third parties',
      ziglu: 'Faster Payments'
    },
    {
      feature: 'UK regulation',
      kraken: 'FCA-registered',
      coinbase: 'FCA-registered',
      binance: 'Restricted UK offering post-FCA action',
      ziglu: 'FCA-registered'
    }
  ];
  protected readonly KRAKEN_URL = KRAKEN_URL;
}
