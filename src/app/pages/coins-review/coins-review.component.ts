import { Component } from '@angular/core';
import { CategoryComponent, CategoryConfig } from '../category/category.component';

@Component({
  selector: 'app-coins-review',
  templateUrl: './coins-review.component.html',
  standalone: true,
  imports: [CategoryComponent]
})
export class CoinsReviewComponent {
  coinsConfig: CategoryConfig = {
    title: 'Coins Review',
    description: 'In-depth analysis and reviews of cryptocurrencies. Learn about different digital assets, their technology, use cases, and potential. Our comprehensive guides help you understand the crypto landscape.',
    popularItems: [
      {
        title: 'What is Bitcoin: Complete Guide',
        category: 'Coins',
        date: 'Jun 30, 2025',
        link: '/bitcoin-origin'
      },
      {
        title: 'Ethereum Review: Smart Contracts Platform',
        category: 'Coins',
        date: 'Jun 28, 2025',
        link: '/ethereum-review'
      },
      {
        title: 'Crypto made simple: A beginner\'s roadmap',
        category: 'Guides',
        date: 'Jun 25, 2025',
        link: '/guides'
      }
    ],
    relatedCategories: [
      { name: 'Exchanges', link: '/exchanges' },
      { name: 'Guides', link: '/guides' },
      { name: 'News', link: '/news' },
      { name: 'Analytics', link: '/analytics' },
      { name: 'Trading', link: '/trading' }
    ],
    showMarketRates: false,
    showFeaturedReview: false,
    articles: [
      {
        id: 1,
        title: 'What is Bitcoin: The Digital Gold',
        category: 'Bitcoin',
        date: 'Jun 30, 2025',
        author: 'John Curator',
        icon: '₿',
        label: 'Coin Review',
        theme: 'light',
        link: '/bitcoin-origin',
        buttonText: 'Learn More'
      },
      {
        id: 2,
        title: 'What is Ethereum: Smart Contract Platform',
        category: 'Ethereum',
        date: 'Jun 28, 2025',
        author: 'John Curator',
        icon: 'Ξ',
        label: 'Coin Review',
        theme: 'dark',
        link: '/ethereum-review',
        buttonText: 'Learn More'
      }
    ]
  };
}
