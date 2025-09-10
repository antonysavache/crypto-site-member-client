import { Component, signal, OnInit, HostListener } from '@angular/core';
import { TldrComponent } from '../../shared/ui/tldr/tldr.component';
import { TableOfContentsComponent } from '../../shared/ui/table-of-contents/table-of-contents.component';
import { KeyValueTableComponent, KeyValueTableItem } from '../../shared/ui/key-value-table/key-value-table.component';
import { ProsConsTableComponent, ProsConsItem } from '../../shared/ui/pros-cons-table/pros-cons-table.component';
import { MaterialComparisonTableComponent, MaterialComparisonColumn, MaterialComparisonRow } from '../../shared/ui/material-comparison-table/material-comparison-table.component';
import { FaqComponent, FaqItem } from '../../shared/ui/faq/faq.component';

@Component({
  selector: 'app-coinbase-review',
  templateUrl: './coinbase-review.component.html',
  styleUrl: './coinbase-review.component.scss',
  standalone: true,
  imports: [TldrComponent, TableOfContentsComponent, KeyValueTableComponent, ProsConsTableComponent, MaterialComparisonTableComponent, FaqComponent]
})
export class CoinbaseReviewComponent implements OnInit {
  protected readonly isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }

  protected readonly tldrItems: string[] = [
    'Coinbase UK is FCA-registered and offers strong security measures with cold storage and insurance coverage',
    'User-friendly interface makes it ideal for beginners to buy crypto with GBP using multiple payment methods',
    'Higher fees compared to competitors - spread ~0.5% plus fixed charges, up to 3.99% for card purchases',
    'Coinbase Pro offers lower maker/taker fees (0.40%/0.60%) for more active traders',
    'Additional products include Coinbase Card (Visa debit with crypto cashback) and Coinbase Wallet for DeFi access'
  ];

  protected readonly keyFactsData: KeyValueTableItem[] = [
    {
      key: 'Founded',
      value: '2012 (San Francisco)'
    },
    {
      key: 'UK Regulation',
      value: 'FCA e-money licence, AML/KYC compliant'
    },
    {
      key: 'Supported Assets',
      value: '200+ cryptocurrencies'
    },
    {
      key: 'UK Deposits',
      value: 'Faster Payments, SEPA, Debit/Credit Cards'
    },
    {
      key: 'Security',
      value: 'Cold storage, 2FA, Insurance coverage'
    },
    {
      key: 'Customer Base',
      value: '100+ million worldwide'
    }
  ];

  protected readonly prosData: ProsConsItem[] = [
    { text: 'FCA registration and e-money licence for GBP protection' },
    { text: 'User-friendly interface perfect for beginners' },
    { text: 'Multiple GBP deposit options (Faster Payments, cards)' },
    { text: 'Strong security with cold storage and insurance' },
    { text: 'Additional products: Coinbase Card and Wallet' },
    { text: 'Support for 200+ cryptocurrencies' }
  ];

  protected readonly consData: ProsConsItem[] = [
    { text: 'Higher fees compared to competitors (spread + fixed charges)' },
    { text: 'Limited advanced trading tools on basic platform' },
    { text: 'No phone support for UK customers' },
    { text: 'Mixed customer service reviews and response times' },
    { text: 'Card purchases carry high 3.99% fees' }
  ];

  protected readonly feeComparisonColumns: MaterialComparisonColumn[] = [
    { key: 'transaction', title: 'Transaction Type', type: 'text' },
    { key: 'coinbase', title: 'Basic Coinbase', type: 'text' },
    { key: 'coinbasePro', title: 'Coinbase Pro', type: 'text' }
  ];

  protected readonly feeComparisonRows: MaterialComparisonRow[] = [
    {
      transaction: 'Buy with GBP balance',
      coinbase: '~0.5% spread + fixed fee',
      coinbasePro: 'Maker 0.40% / Taker 0.60%'
    },
    {
      transaction: 'Buy with debit/credit card',
      coinbase: '3.99%',
      coinbasePro: 'Not available'
    },
    {
      transaction: 'Bank deposit (GBP)',
      coinbase: 'Free',
      coinbasePro: 'Free'
    },
    {
      transaction: 'Crypto-to-crypto trade',
      coinbase: 'Around 2%',
      coinbasePro: 'Maker/Taker rates only'
    },
    {
      transaction: 'Withdrawal to GBP bank',
      coinbase: 'Up to £1',
      coinbasePro: '£0.15'
    }
  ];

  protected readonly competitorColumns: MaterialComparisonColumn[] = [
    { key: 'exchange', title: 'Exchange', type: 'text' },
    { key: 'fcaStatus', title: 'FCA Status', type: 'text' },
    { key: 'assets', title: 'Assets Available', type: 'text' },
    { key: 'tradingCosts', title: 'Trading Costs', type: 'text' },
    { key: 'easeOfUse', title: 'Ease of Use', type: 'text' }
  ];

  protected readonly competitorRows: MaterialComparisonRow[] = [
    {
      exchange: 'Coinbase UK',
      fcaStatus: 'FCA-registered (limited)',
      assets: '~200',
      tradingCosts: 'Spread ~0.5% + fixed %',
      easeOfUse: 'Very high'
    },
    {
      exchange: 'Binance',
      fcaStatus: 'Limited FCA permissions',
      assets: '350+',
      tradingCosts: '0.10%',
      easeOfUse: 'Medium'
    },
    {
      exchange: 'Kraken',
      fcaStatus: 'FCA-registered',
      assets: '220+',
      tradingCosts: '0.16% / 0.26% maker/taker',
      easeOfUse: 'Medium-high'
    },
    {
      exchange: 'Bitstamp',
      fcaStatus: 'FCA-registered',
      assets: '80+',
      tradingCosts: '0.10%–0.25%',
      easeOfUse: 'High'
    }
  ];

  protected readonly faqItems: FaqItem[] = [
    {
      question: 'Is Coinbase regulated in the UK?',
      answer: 'Yes. Coinbase operates under FCA regulation with an e-money licence that covers GBP transactions and customer fund protection. The company is also registered under Money Laundering Regulations for AML/KYC compliance.',
      isOpen: false
    },
    {
      question: 'What fees should I expect when using Coinbase UK?',
      answer: 'Fees depend on your trading method. The basic app applies a spread of about 0.5% plus fixed charges (£0.99–£2.99) or percentage fees up to 3.99% for card purchases. Coinbase Pro uses lower maker/taker rates starting at 0.40%/0.60%.',
      isOpen: false
    },
    {
      question: 'Can I use PayPal with Coinbase UK?',
      answer: 'PayPal is available for withdrawals only, not for deposits. For adding funds, you can use Faster Payments, debit/credit cards, or SEPA transfers.',
      isOpen: false
    },
    {
      question: 'Is Coinbase beginner-friendly?',
      answer: 'Yes. Coinbase UK is widely considered the most accessible crypto exchange for first-time buyers due to its intuitive interface, multiple GBP deposit options, and educational resources.',
      isOpen: false
    },
    {
      question: 'What payment methods are available for UK users?',
      answer: 'UK users can deposit via Faster Payments (free, same day), SEPA transfers, debit/credit cards (3.99% fee), and withdraw via the same methods plus PayPal (2% fee, capped at £25).',
      isOpen: false
    },
    {
      question: 'How does Coinbase UK compare to other exchanges?',
      answer: 'Coinbase UK offers superior ease of use and regulatory compliance but has higher fees than competitors like Kraken or Bitstamp. It\'s ideal for beginners but active traders may prefer lower-cost alternatives.',
      isOpen: false
    }
  ];

  protected readonly article = {
    title: 'Coinbase Review UK 2025: Fees, FCA Regulation & Alternatives',
    author: 'Crypto Expert Team',
    date: 'January 2025',
    category: 'Exchange Review',
    heroImage: {
      src: 'https://via.placeholder.com/800x400/1652F0/FFFFFF?text=Coinbase+UK+Review+2025',
      alt: 'Coinbase UK Review 2025'
    },
    content: `
      <h2>What is Coinbase UK?</h2>
      <p>Coinbase was founded in San Francisco in 2012 and initially worked as a simple Bitcoin broker. Over the years, it transformed into one of the most significant cryptocurrency businesses globally. In 2021, the company was listed on NASDAQ, which brought additional transparency and trust to its operations.</p>

      <p>In Britain, the Coinbase exchange UK caters not only to individual traders but also to businesses and some institutional clients. Customers can fund their accounts using Faster Payments, link debit or credit cards, and gain access to more than one hundred digital currencies. With millions of users across the country, it has become one of the most widely used gateways into crypto.</p>

      <h2>Coinbase FCA Regulation and Safety</h2>
      <p>A frequent concern for beginners is whether Coinbase is legally allowed to operate in Britain. The short answer is yes — but the details matter. In the UK, the company holds an <strong>FCA e-money licence</strong>. This authorisation covers payments in pounds, meaning deposits and withdrawals are processed under financial safeguards and customer balances are kept separate from the firm's own funds.</p>

      <p>When it comes to digital currency itself, the situation is different. The FCA does not regulate crypto trading directly, since tokens are treated as high-risk speculative assets. Instead, Coinbase is listed with the FCA under the <strong>Money Laundering Regulations</strong>, which obliges it to meet anti-money-laundering (AML) and identity-verification (KYC) standards.</p>

      <h3>Security Measures</h3>
      <p>In terms of security, Coinbase uses a combination of cold storage for most digital assets, mandatory two-factor authentication, and insurance policies that protect custodial holdings in case of hacks or theft. UK residents must also remember that profits from selling crypto are subject to <strong>Capital Gains Tax</strong> and should be declared to HMRC.</p>

      <h2>Coinbase Products Available in the UK</h2>
      <p>For local clients, Coinbase UK has built an ecosystem that goes far beyond simply buying and selling coins. Each product is aimed at making digital money easier to use, whether you are just starting or already have trading experience.</p>

      <h3>Coinbase Exchange (Basic)</h3>
      <p>The core service, often referred to as the standard Coinbase exchange UK, is tailored for beginners. With it, users can purchase leading cryptocurrencies such as Bitcoin or Ethereum directly with pounds. The process is straightforward: choose a currency, specify the amount, and confirm.</p>

      <h3>Coinbase Pro (Advanced Trading)</h3>
      <p>Those who want more functionality can use Coinbase Pro, which provides lower fees and a richer set of tools. Traders gain access to professional charts, different order types (limit, stop, market), and real-time depth of market. The fee model is based on <strong>maker/taker pricing</strong>, which is often cheaper than the flat fees applied on the basic platform.</p>

      <h3>Coinbase Wallet</h3>
      <p>The Coinbase wallet UK gives users direct control over their funds by allowing them to manage private keys themselves. It supports a wide range of digital tokens and non-fungible tokens (NFTs) and also connects to decentralised finance (DeFi) applications.</p>

      <h3>Coinbase Card (Visa Debit)</h3>
      <p>For those wanting to integrate crypto into daily life, the Coinbase card UK offers a practical solution. This Visa debit card lets holders spend their crypto balance anywhere Visa is accepted, with automatic conversion into pounds at the point of sale. Depending on the asset used, customers may also receive up to 4% cashback in cryptocurrency.</p>

      <h2>Deposits and Withdrawals for UK Users</h2>
      <p>For people in the UK, one of the strongest points of Coinbase UK is the flexibility it gives in moving money in and out of the account. Customers can add funds or take out profits through several channels, each with its own cost and speed.</p>

      <h3>Available Payment Methods</h3>
      <ul>
        <li><strong>Faster Payments</strong> — domestic GBP transfers, often showing up in a few hours and almost always within the same day</li>
        <li><strong>SEPA transfers</strong> — suitable for those who also hold a euro bank account</li>
        <li><strong>Debit or credit cards</strong> — allow instant purchases, though the convenience comes with higher charges</li>
        <li><strong>PayPal</strong> — supported only for withdrawals, making cashing out more straightforward</li>
      </ul>

      <h2>Who Benefits Most from Coinbase UK?</h2>
      <p>Coinbase UK is particularly well-suited for different types of users:</p>

      <h3>Ideal for Beginners</h3>
      <p>The main Coinbase exchange UK is designed for simplicity. Depositing pounds and making a first trade is quick and intuitive, making it perfect for newcomers to cryptocurrency.</p>

      <h3>Advanced Users</h3>
      <p>The Pro option (now merged into the Advanced Trade section) gives access to charts, extra order types, and lower fees for more experienced traders.</p>

      <h3>Consider Alternatives If:</h3>
      <ul>
        <li>You prioritise minimal costs (consider Kraken, Bitstamp)</li>
        <li>You want the widest selection of coins (consider Binance)</li>
        <li>You're an active day trader requiring advanced tools</li>
      </ul>

      <h2>Final Verdict</h2>
      <p>For many British investors, Coinbase continues to be the go-to entry point into digital assets. Its blend of straightforward design, multiple GBP funding methods, and compliance with UK regulation make it a reliable choice. While advanced traders may prefer platforms with lower charges, Coinbase UK remains one of the most trusted gateways for purchasing cryptocurrency in 2025.</p>

      <p>The main drawback is cost. Coinbase fees UK are higher than many rivals. For small, occasional purchases, the premium may be acceptable in exchange for convenience and peace of mind. But anyone trading actively or dealing with significant sums will often discover better value from alternatives like Kraken or Bitstamp.</p>
    `
  };
}
