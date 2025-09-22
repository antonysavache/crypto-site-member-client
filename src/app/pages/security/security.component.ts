import { Component } from '@angular/core';
import { CategoryComponent, CategoryConfig } from '../category/category.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  standalone: true,
  imports: [CategoryComponent]
})
export class SecurityComponent {
  securityConfig: CategoryConfig = {
    title: 'Security',
    description: 'Comprehensive guides on cryptocurrency security, risk management, and tax compliance for UK investors.',
    popularItems: [
      {
        title: 'Crypto Risks & Security Hub',
        category: 'Security',
        date: 'Jan 15, 2025',
        link: '/security/crypto-risks'
      },
      {
        title: 'UK Crypto Tax Guide',
        category: 'Tax Guide',
        date: 'Jan 20, 2025',
        link: '/security/uk-crypto-tax'
      }
    ],
    relatedCategories: [
      { name: 'Exchanges', link: '/exchanges' },
      { name: 'Coins Review', link: '/coins' },
      { name: 'Guides', link: '/guides' }
    ],
    showMarketRates: false,
    showFeaturedReview: true,
    featuredDescription: 'Security and compliance are essential for safe cryptocurrency investing. Learn how to protect your digital assets and stay compliant with UK tax regulations.',
    articles: [
      {
        id: 1,
        title: 'Crypto Risks & Security Hub',
        category: 'Security',
        date: 'Jan 15, 2025',
        author: 'Security Team',
        icon: '🔒',
        label: 'Guide',
        theme: 'light',
        link: '/security/crypto-risks',
        buttonText: 'Read Guide'
      },
      {
        id: 2,
        title: 'UK Crypto Tax Guide',
        category: 'Tax Guide',
        date: 'Jan 20, 2025',
        author: 'Tax Specialists',
        icon: '💰',
        label: 'Guide',
        theme: 'dark',
        link: '/security/uk-crypto-tax',
        buttonText: 'Read Guide'
      }
    ]
  };
}
