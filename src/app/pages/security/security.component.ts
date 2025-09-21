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
    description: 'Comprehensive guides on cryptocurrency security, risk management, and protection strategies. Learn how to keep your digital assets safe.',
    popularItems: [
      {
        title: 'Complete Guide to Crypto Security Fundamentals',
        category: 'Security',
        date: 'Jan 15, 2025',
        link: '/crypto-risks-security'
      },
      {
        title: 'Hardware Wallet Setup: Ultimate Protection Guide',
        category: 'Security',
        date: 'Jan 10, 2025',
        link: '/guides/hardware-wallet-setup'
      },
      {
        title: 'MetaMask Security: Protect Your Browser Wallet',
        category: 'Security',
        date: 'Jan 5, 2025',
        link: '/guides/metamask-safety'
      }
    ],
    relatedCategories: [
      { name: 'Exchanges', link: '/exchanges' },
      { name: 'Wallets', link: '/wallets' },
      { name: 'Guides', link: '/guides' },
      { name: 'Analytics', link: '/analytics' },
      { name: 'Stories', link: '/stories' }
    ],
    showMarketRates: false,
    showFeaturedReview: true,
    featuredDescription: 'Security is the foundation of successful cryptocurrency investing. Our comprehensive guides cover everything from basic security practices to advanced protection strategies. Learn how to secure your exchanges, wallets, and transactions while avoiding common threats and scams.',
    articles: [
      {
        id: 1,
        title: 'Crypto Risks & Security Hub',
        category: 'Security',
        date: 'Jan 15, 2025',
        author: 'Security Expert',
        icon: '🔒',
        label: 'Guide',
        theme: 'light',
        link: '/crypto-risks-security',
        buttonText: 'Read Guide'
      },
      {
        id: 2,
        title: 'Hardware Wallet Complete Setup',
        category: 'Security',
        date: 'Jan 10, 2025',
        author: 'Crypto Advisor',
        icon: '🔐',
        label: 'Tutorial',
        theme: 'dark',
        link: '/guides/hardware-wallet-setup',
        buttonText: 'View Tutorial'
      },
      {
        id: 3,
        title: 'Common Crypto Scams to Avoid',
        category: 'Security',
        date: 'Jan 8, 2025',
        author: 'Security Expert',
        icon: '⚠️',
        label: 'Warning',
        theme: 'light',
        link: '/guides/crypto-scams',
        buttonText: 'Learn More'
      },
      {
        id: 4,
        title: 'Exchange Security Best Practices',
        category: 'Security',
        date: 'Jan 5, 2025',
        author: 'Trading Expert',
        icon: '🏦',
        label: 'Best Practices',
        theme: 'dark',
        link: '/guides/exchange-security',
        buttonText: 'Read Guide'
      },
      {
        id: 5,
        title: 'MetaMask Safety & Configuration',
        category: 'Security',
        date: 'Jan 3, 2025',
        author: 'DeFi Expert',
        icon: '🦊',
        label: 'Setup',
        theme: 'light',
        link: '/guides/metamask-safety',
        buttonText: 'Setup Guide'
      },
      {
        id: 6,
        title: 'Backup & Recovery Strategies',
        category: 'Security',
        date: 'Dec 30, 2024',
        author: 'Security Expert',
        icon: '💾',
        label: 'Backup',
        theme: 'dark',
        link: '/guides/backup-recovery',
        buttonText: 'Learn Backup'
      }
    ]
  };
}
