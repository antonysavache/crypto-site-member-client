import {Component, signal, OnInit, HostListener} from '@angular/core';
import {TldrComponent} from '../../shared/ui/tldr/tldr.component';
import {KeyValueTableComponent, KeyValueTableItem} from '../../shared/ui/key-value-table/key-value-table.component';
import {ProsConsTableComponent, ProsConsItem} from '../../shared/ui/pros-cons-table/pros-cons-table.component';
import {
  MaterialComparisonTableComponent,
  MaterialComparisonColumn,
  MaterialComparisonRow
} from '../../shared/ui/material-comparison-table/material-comparison-table.component';
import {FaqComponent, FaqItem} from '../../shared/ui/faq/faq.component';
import {TableOfContentsComponent} from '../../shared/ui/table-of-contents/table-of-contents.component';
import {ProsListComponent, ProsItem} from '../../shared/ui/pros-list/pros-list.component';
import {BulletListComponent} from '../../shared/ui/bullet-list/bullet-list.component';

@Component({
  selector: 'app-coinbase-review',
  templateUrl: './kraken-review.component.html',
  styleUrl: './kraken-review.component.scss',
  standalone: true,
  imports: [
    TldrComponent,
    KeyValueTableComponent,
    ProsConsTableComponent,
    MaterialComparisonTableComponent,
    FaqComponent,
    TableOfContentsComponent,
    ProsListComponent,
    BulletListComponent
  ]
})
export class KrakenReviewComponent implements OnInit {

  // Mobile detection
  protected readonly isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }

  // Hero данные
  protected readonly article = {
    title: 'Kraken Exchange Review: Your Guide to Crypto Trading in the UK',
    author: 'Crypto Expert Team',
    date: 'January 2025',
    category: 'Exchange Review',
    heroImage: {
      src: '/images/coinbase-review-hero.png',
      alt: 'Coinbase UK Review 2025'
    }
  };

  // TL;DR данные
  protected readonly tldrItems: string[] = [
    'Kraken is a well-established cryptocurrency exchange operating in the UK, offering a wide range of features for both novice and experienced traders.  It supports a diverse selection of trading pairs, including major cryptocurrencies like Bitcoin and Ethereum, alongside numerous altcoins.  Kraken also provides staking options for eligible crypto assets, allowing users to earn passive income.',
  ];

  // Pros & Cons данные
  protected readonly prosData: ProsConsItem[] = [
    {text: 'Wide range of cryptocurrency trading pairs, including Bitcoin, Ethereum, and many altcoins'},
    {text: 'FCA registration and compliance with UK regulations'},
    {text: 'Multiple deposit and withdrawal options in GBP (Faster Payments, CHAPS)'},
    {text: 'Mobile app for trading on the go'},
    {text: 'Staking options available for select cryptocurrencies'},
    {text: 'Strong security measures and solid track record'},
    {text: 'User-friendly interface suitable for beginners and experienced traders'},
  ];

  protected readonly consData: ProsConsItem[] = [
    {text: 'Higher fees for certain trading pairs or payment methods'},
    {text: 'Some features may be restricted for UK retail users (e.g., derivatives)'},
    {text: 'Verification process can take time'},
    {text: 'Customer support response may be slower at peak times'},
  ];

  // Kraken Key Features
  protected readonly krakenFeatures: ProsItem[] = [
    {
      title: 'Robust Security Features:',
      description: 'Kraken\'s robust security features, including two-factor authentication and advanced encryption, protect your assets from unauthorized access. They consistently undergo security audits and proactively address vulnerabilities, providing a high level of confidence for UK users. This commitment to security is a key differentiator.'
    },
    {
      title: 'FCA Registration:',
      description: 'Kraken is registered with the Financial Conduct Authority (FCA) in the UK, demonstrating compliance with local regulations and providing an added layer of security and trust. This regulatory oversight ensures that Kraken operates within the legal framework set by the UK government. It\'s vital for UK users to choose regulated exchanges.'
    },
    {
      title: 'Competitive Trading Fees:',
      description: 'Kraken offers competitive trading fees, varying depending on the trading pair and volume. For example, fees for trading BTC/GBP or ETH/GBP are highly competitive compared to other UK exchanges. Transparent fee structures and multiple payment options are key to success in the market.'
    },
    {
      title: 'Responsive Customer Support:',
      description: 'Kraken provides responsive customer support channels, including email, phone, and a comprehensive FAQ section. Their multilingual support team addresses queries efficiently, and the robust help center offers solutions to common problems experienced by UK traders. Excellent customer service helps mitigate trading issues.'
    }
  ];

  // Derivative Types List
  protected readonly derivativeTypes: string[] = [
    '<strong>Futures Contracts:</strong> Agreements to buy or sell an asset at a predetermined price on a specific future date. These are commonly used for hedging and medium-term speculation.',
    '<strong>Perpetual Contracts:</strong> Similar to futures but without an expiration date, allowing positions to be held indefinitely, provided maintenance margin requirements are met.',
    '<strong>Options:</strong> Contracts that grant the holder the right, but not the obligation, to buy or sell an asset at a specified strike price within a set timeframe. Options are often employed to hedge against volatility with defined downside risk.'
  ];

  // Derivatives Comparison Table
  protected readonly derivativesComparisonColumns: MaterialComparisonColumn[] = [
    {key: 'instrumentType', title: 'Instrument Type', type: 'text'},
    {key: 'riskLevel', title: 'Risk Level', type: 'text'},
    {key: 'leverage', title: 'Leverage', type: 'text'},
    {key: 'expiration', title: 'Expiration', type: 'text'},
    {key: 'obligation', title: 'Obligation', type: 'text'},
    {key: 'typicalUseCase', title: 'Typical Use Case', type: 'text'},
  ];

  protected readonly derivativesComparisonRows: MaterialComparisonRow[] = [
    {
      instrumentType: 'Futures',
      riskLevel: 'High',
      leverage: 'up to 50x',
      expiration: 'Fixed',
      obligation: 'Mandatory',
      typicalUseCase: 'Hedging, medium-term speculation',
    },
    {
      instrumentType: 'Perpetuals',
      riskLevel: 'Very High',
      leverage: 'up to 10x',
      expiration: 'None',
      obligation: 'Mandatory',
      typicalUseCase: 'Flexible speculation, long-term holds',
    },
    {
      instrumentType: 'Options',
      riskLevel: 'Moderate',
      leverage: 'N/A',
      expiration: 'Fixed',
      obligation: 'Optional',
      typicalUseCase: 'Hedging volatility with defined downside',
    },
  ];

  // Trading Instruments Comparison Table
  protected readonly tradingInstrumentsColumns: MaterialComparisonColumn[] = [
    {key: 'instrument', title: 'Instrument', type: 'text'},
    {key: 'riskLevel', title: 'Risk level', type: 'text'},
    {key: 'leverage', title: 'Typical / reported leverage', type: 'text'},
    {key: 'expiration', title: 'Expiration', type: 'text'},
    {key: 'obligation', title: 'Obligation', type: 'text'},
    {key: 'useCase', title: 'Use case (UK notes)', type: 'text'},
  ];

  protected readonly tradingInstrumentsRows: MaterialComparisonRow[] = [
    {
      instrument: 'Spot trading',
      riskLevel: 'Low–Medium',
      leverage: 'N/A',
      expiration: 'None',
      obligation: 'No',
      useCase: 'Buy & hold; custody. (see Kraken markets). support.kraken.com',
    },
    {
      instrument: 'Margin (spot)',
      riskLevel: 'High',
      leverage: '~5–10× (pair-dependent)',
      expiration: 'None',
      obligation: 'Borrowed funds',
      useCase: 'Increase spot exposure; UK access needs eligibility. support.kraken.com',
    },
    {
      instrument: 'Perps & Futures',
      riskLevel: 'Very High',
      leverage: 'Perps up to 10×; some futures up to 50× (professional)',
      expiration: 'Perps: none; Futures: fixed',
      obligation: 'Margin / contract',
      useCase: 'Speculation, hedging; professional/eligibility gating applies.',
    },
  ];

  // Practical Notes for UK Users
  protected readonly practicalNotesItems: string[] = [
    '<strong>GBP rails:</strong> Kraken uses partners (e.g., Banking Circle, ClearJunction) to support GBP rails such as Faster Payments and CHAPS; exact deposit/withdrawal availability and fees depend on account level and bank routing.',
    '<strong>Eligibility & compliance:</strong> Margin and many derivatives features require specific verification or professional status in the UK — check Kraken Pro\'s eligibility flows and support pages before attempting to trade leveraged products.',
    '<strong>Regulatory status:</strong> Kraken holds UK regulatory approvals for certain e-money/fiat services; verify which Kraken entity and licence applies to the service you intend to use.'
  ];

  // Spot Trading Features
  protected readonly spotTradingFeatures: string[] = [
    'Asset availability can vary by country and by network',
    'Straightforward choice for buy-and-hold investors',
    'Simple market orders and limit orders',
    'Direct custody of cryptocurrencies'
  ];

  // Margin Trading Features
  protected readonly marginTradingFeatures: string[] = [
    'Leverage levels vary by pair (commonly 5–10×)',
    'Exact max leverage shown per pair in Kraken\'s margin tables',
    'UK clients must meet specific eligibility rules',
    'Requires declaring high net worth borrower status for fiat pairs',
    'Always verify eligibility in Kraken Pro'
  ];

  // Derivatives Features
  protected readonly derivativesFeatures: string[] = [
    'Perps advertise up to <strong>10× buying power</strong> for retail products',
    'Professional contracts can offer higher leverage (up to 50×)',
    'Positions without expiry for perpetuals',
    'Access is eligibility-gated and may be restricted by jurisdiction',
    'High risk — margin, funding rates and liquidation mechanics apply'
  ];

  // Verification Levels
  protected readonly verificationLevels: string[] = [
    '<strong>Starter Level:</strong> Grants minimal access; you can browse the platform but deposits and trades are limited',
    '<strong>Intermediate Level:</strong> Requires full identity verification, including passport or government ID and proof of address. This unlocks GBP deposits via Faster Payments or CHAPS and higher trading limits UK',
    '<strong>Pro/Professional Level:</strong> Tailored for institutional or high-net-worth traders, including additional documentation and source-of-funds checks'
  ];

  // Trading Steps
  protected readonly tradingSteps: string[] = [
    '<strong>Deposit Funds:</strong> Start by funding your account in GBP via Faster Payments for instant transfers, or CHAPS for larger amounts',
    '<strong>Choose Market Type:</strong> Spot Trading (simple), Margin Trading (leverage), or Futures/Perpetual Contracts (advanced)',
    '<strong>Place Orders:</strong> Kraken offers limit, market, stop-loss, and take-profit orders to help manage risk',
    '<strong>Monitor Positions:</strong> Keep track of your portfolio, PnL, and margin requirements on web or mobile app',
    '<strong>Withdraw Funds:</strong> GBP can be withdrawn directly to UK bank accounts, or crypto moved to external wallet'
  ];

}
