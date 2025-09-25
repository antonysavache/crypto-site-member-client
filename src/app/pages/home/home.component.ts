import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleCardComponent, ArticleCardData } from '../../shared/ui/article-card/article-card.component';
import { ArticleCardLargeComponent, ArticleCardLargeData } from '../../shared/ui/article-card-large/article-card-large.component';
import { NewsSectionComponent, NewsSectionData } from '../../shared/ui/news-section/news-section.component';
import { ReviewCardComponent, ReviewCardData } from '../../shared/ui/review-card/review-card.component';
import { ProTipComponent } from '../../shared/ui/pro-tip/pro-tip.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [RouterLink, ArticleCardComponent, ArticleCardLargeComponent, NewsSectionComponent, ReviewCardComponent, ProTipComponent]
})
export class HomeComponent {
  // Тестовые данные для новостной секции
  newsData: NewsSectionData = {
    sectionTitle: 'How-to Guides for Beginners',
    sectionDescription: 'Short, practical steps for your first buy and safe setup.',
    layout: 'featured-left',
    featuredItem: {
      title: 'How to Deposit on Kraken — Step‑by‑Step',
      description: 'Create account → Verify → Deposit (SEPA/Card) → First buy — safely.',
      category: 'GUIDE',
      date: 'Updated Jun 29, 2025',
      readTime: '5–7 min read',
      routerLink: '/guides/how-to-deposit-kraken',
      affiliateLink: 'https://r.kraken.com/signup?utm_source=tokenoversity&utm_medium=affiliate&utm_campaign=home_howto&utm_content=deposit_tile_btn',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '₿'
    },
    regularItems: [
      {
        title: 'How to Buy ETH (UK)',
        category: 'Guide',
        date: 'Jun 29, 2025',
        routerLink: '/guides/how-to-buy-eth-uk'
      },
      {
        title: 'How to Buy BTC (UK)',
        category: 'Guide',
        date: 'Jun 29, 2025',
        routerLink: '/guides/how-to-buy-btc-uk'
      },
      {
        title: 'Withdraw to a Hardware Wallet',
        category: 'Guide',
        date: 'Jun 29, 2025',
        routerLink: '/guides/withdraw-hardware-wallet'
      }
    ]
  };

  // Тестовые данные для больших карточек статей
  testLargeArticles: ArticleCardLargeData[] = [
    {
      title: 'Kraken Review 2025 — Why It\'s Our #1 Pick',
      description: 'Security, fees and deposits explained. Clear pros & cons for beginners.',
      category: 'REVIEW',
      date: 'Updated Jun 29, 2025',
      readTime: '6–8 min read',
      routerLink: '/kraken-review',
      primaryCta: 'Open Kraken Account →',
      primaryCtaLink: 'https://r.kraken.com/signup?utm_source=tokenoversity&utm_medium=affiliate&utm_campaign=home_block&utm_content=review_btn',
      secondaryCta: 'Read full review',
      secondaryCtaLink: '/kraken-review',
      utmContent: 'review_btn',
      analyticsCard: 'home_feature_review_card',
      analyticsCta: 'home_feature_review_cta',
      imageUrl: '/images/kraken/kraken-preview-card.png',
      icon: '🔐'
    },
    {
      title: 'Best Exchange for the UK — Our #1 Pick (Kraken)',
      description: 'Independently tested deposits, fees and safety. See why we recommend Kraken for UK beginners.',
      category: 'TOP PICK',
      date: 'Updated Jun 29, 2025',
      readTime: '4–6 min read',
      routerLink: '/best-crypto-exchange-uk',
      primaryCta: 'See Best Exchange →',
      primaryCtaLink: '/best-crypto-exchange-uk',
      secondaryCta: 'Start on Kraken →',
      secondaryCtaLink: 'https://r.kraken.com/signup?utm_source=tokenoversity&utm_medium=affiliate&utm_campaign=home_top_pick&utm_content=card_btn',
      utmContent: 'card_btn',
      analyticsCard: 'home_feature_top_pick_card',
      analyticsCta: 'home_feature_top_pick_cta',
      imageUrl: '/images/home/best-exchange-card-preview.png',
      icon: '🏆'
    }
  ];

  // Тестовые данные для карточек статей
  testArticles: ArticleCardData[] = [
    {
      title: 'How to Buy Bitcoin Safely',
      category: 'Articles',
      date: 'Jun 30, 2025',
      routerLink: '/bitcoin-origin',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Kraken vs Coinbase: Complete Comparison',
      category: 'Reviews',
      date: 'Jun 28, 2025',
      routerLink: '/kraken-review',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Understanding Crypto Tax in UK',
      category: 'Guides',
      date: 'Jun 25, 2025',
      routerLink: '/uk-crypto-tax',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    }
  ];

  // Данные для Coin Reviews & Fundamentals секции
  cryptoKnowledgeReviews: ReviewCardData[] = [
    {
      id: 1,
      title: 'Bitcoin Review: The Original Cryptocurrency',
      category: 'Cryptocurrency',
      date: 'Jan 15, 2025',
      readTime: '6–8 min read',
      author: 'Crypto Team',
      icon: '₿',
      label: 'REVIEW',
      theme: 'light',
      link: '/coins/bitcoin-review',
      buttonText: 'Read Review',
      imageUrl: '/images/home/BTC-card-article-preview.png'
    },
    {
      id: 2,
      title: 'Ethereum Review: Smart-Contract Platform',
      category: 'Cryptocurrency',
      date: 'Jan 10, 2025',
      readTime: '6–8 min read',
      author: 'Crypto Team',
      icon: 'Ξ',
      label: 'REVIEW',
      theme: 'dark',
      link: '/coins/ethereum-review',
      buttonText: 'Read Review',
      imageUrl: '/images/home/ETH-card-article-preview.png'
    },
    {
      id: 3,
      title: 'Solana Review: High-Performance Blockchain',
      category: 'Cryptocurrency',
      date: 'Jan 5, 2025',
      readTime: '5–7 min read',
      author: 'Crypto Team',
      icon: '◎',
      label: 'REVIEW',
      theme: 'light',
      link: '/coins/solana-review',
      buttonText: 'Read Review',
      imageUrl: '/images/home/SOL-card-article-preview.png'
    }
  ];

  // Данные для Security & Taxes секции
  securityTaxesReviews: ReviewCardData[] = [
    {
      id: 4,
      title: 'Avoid Common Crypto Scams (2025)',
      category: 'Security',
      date: 'Jun 30, 2025',
      readTime: '6–8 min read',
      author: 'Crypto Team',
      icon: '🛡️',
      label: 'SECURITY',
      theme: 'light',
      link: '/security/crypto-scams',
      buttonText: 'Read Guide',
      teaser: 'Red flags, fake support, phishing and "too-good-to-be-true" yields — how to verify links, wallets and apps.',
      imageUrl: '/images/home/security-avoid-scams-article-preview.png'
    },
    {
      id: 5,
      title: 'UK Crypto Taxes — 2025 Basics',
      category: 'Taxes',
      date: 'Jun 30, 2025',
      readTime: '7–9 min read',
      author: 'Crypto Team',
      icon: '💼',
      label: 'TAXES',
      theme: 'light',
      link: '/security/uk-crypto-tax-basics',
      buttonText: 'Read Guide',
      teaser: 'Income vs capital gains, HMRC rules, allowances, record-keeping and simple examples for beginners.',
      imageUrl: '/images/home/security-taxes-explaining-article-preview.png'
    }
  ];

  constructor() {}
}
