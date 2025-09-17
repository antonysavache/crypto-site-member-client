import { Component } from '@angular/core';
import { KeyValueTableComponent, KeyValueTableItem } from '../../shared/ui/key-value-table/key-value-table.component';
import { ProsListComponent, ProsItem } from '../../shared/ui/pros-list/pros-list.component';

@Component({
  selector: 'app-bitcoin-origin',
  templateUrl: './bitcoin-origin.component.html',
  styleUrl: './bitcoin-origin.component.scss',
  standalone: true,
  imports: [
    KeyValueTableComponent,
    ProsListComponent
  ]
})
export class BitcoinOriginComponent {

  timelineData: KeyValueTableItem[] = [
    {
      key: '2008',
      value: 'Whitepaper published — Satoshi Nakamoto publishes "Bitcoin: A Peer-to-Peer Electronic Cash System". <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener">Link to whitepaper</a>'
    },
    {
      key: '2009',
      value: 'Genesis block mined; Bitcoin network launches (January 2009).'
    },
    {
      key: '2010',
      value: 'First documented commercial bitcoin purchase ("Bitcoin Pizza Day").'
    },
    {
      key: '2013–2014',
      value: 'Major price cycles and notable exchange incidents; growing regulatory attention.'
    },
    {
      key: '2017',
      value: 'Large bull market and substantial ecosystem growth.'
    },
    {
      key: '2020–2023',
      value: 'Institutional adoption: custody solutions, corporate treasuries and regulated products (e.g., ETFs).'
    },
    {
      key: '2024–2025',
      value: 'Market maturation with increased liquidity, ETF flows and broader institutional participation.'
    }
  ];

  keyFacts: KeyValueTableItem[] = [
    {
      key: 'Whitepaper',
      value: '2008 — Satoshi Nakamoto <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener">(bitcoin.org/bitcoin.pdf)</a>'
    },
    {
      key: 'Genesis block',
      value: 'January 2009'
    },
    {
      key: 'First commercial use',
      value: 'May 2010 — Bitcoin Pizza'
    },
    {
      key: 'Max supply',
      value: '21,000,000 BTC'
    }
  ];

  // Use Case Scenarios
  investorScenario: KeyValueTableItem[] = [
    {
      key: 'Goal',
      value: 'Portfolio diversification away from fiat currencies'
    },
    {
      key: 'Strategy',
      value: 'Reallocate part of pension pot to Bitcoin'
    },
    {
      key: 'Benefit',
      value: 'Reduce correlation with equities, hedge against inflation'
    },
    {
      key: 'Trade-off',
      value: 'Accept volatility for potential scarcity-led gains'
    }
  ];

  remittanceScenario: KeyValueTableItem[] = [
    {
      key: 'User',
      value: 'Migrant worker sending money home'
    },
    {
      key: 'Problem',
      value: 'Traditional banking is slow and costly'
    },
    {
      key: 'Solution',
      value: 'Bitcoin for cross-border payments'
    },
    {
      key: 'Advantage',
      value: 'Faster and cheaper than traditional remittance rails'
    }
  ];

  // Bitcoin Benefits for Pros List
  bitcoinBenefits: ProsItem[] = [
    {
      title: 'Digital Gold Properties',
      description: 'Scarce supply (21M BTC cap) and portability make it an attractive store of value alternative to traditional safe-havens'
    },
    {
      title: 'Decentralised Network',
      description: 'No single point of failure or control, resistant to censorship and government interference'
    },
    {
      title: 'Global Liquidity',
      description: '24/7 trading across worldwide exchanges with deep liquidity pools'
    },
    {
      title: 'Inflation Hedge',
      description: 'Fixed supply protocol provides protection against fiat currency debasement and monetary expansion'
    },
    {
      title: 'Cross-Border Efficiency',
      description: 'Enables faster and potentially cheaper international transfers compared to traditional banking'
    },
    {
      title: 'Financial Sovereignty',
      description: 'Self-custody options allow individuals to maintain direct control over their assets'
    }
  ];
}
