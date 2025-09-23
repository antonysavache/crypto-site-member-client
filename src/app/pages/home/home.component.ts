import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleCardComponent, ArticleCardData } from '../../shared/ui/article-card/article-card.component';
import { ArticleCardLargeComponent, ArticleCardLargeData } from '../../shared/ui/article-card-large/article-card-large.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [RouterLink, ArticleCardComponent, ArticleCardLargeComponent]
})
export class HomeComponent {
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
      title: 'How to Deposit on Kraken — Step-by-Step',
      description: 'Create account → Verify → Deposit (SEPA/Card) → First buy — safely.',
      category: 'GUIDE',
      date: 'Updated Jun 29, 2025',
      readTime: '5–7 min read',
      routerLink: '/guides/how-to-deposit-kraken',
      primaryCta: 'Start on Kraken →',
      primaryCtaLink: 'https://r.kraken.com/signup?utm_source=tokenoversity&utm_medium=affiliate&utm_campaign=home_block&utm_content=guide_btn',
      secondaryCta: 'See the steps',
      secondaryCtaLink: '/guides/how-to-deposit-kraken',
      utmContent: 'guide_btn',
      analyticsCard: 'home_feature_guide_card',
      analyticsCta: 'home_feature_guide_cta',
      imageUrl: '/images/kraken-guide/kraken-guide-preview-card.png',
      icon: '🛠️'
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

  constructor() {}
}
