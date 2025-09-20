import { Component } from '@angular/core';
import { CategoryComponent, CategoryConfig } from '../category/category.component';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  standalone: true,
  imports: [CategoryComponent]
})
export class ExchangesComponent {
  exchangesConfig: CategoryConfig = {
    title: 'Exchanges',
    description: 'Curated feed on the topic: reviews, analytics and guides. Emphasis on readability, clean typography, spacious spacing, soft accents.',
    popularItems: [
      {
        title: 'Crypto made simple: A beginner\'s roadmap to digital currency',
        category: 'Category',
        date: 'Jun 30, 2025',
        link: '/bitcoin-origin'
      },
      {
        title: 'Crypto made simple: A beginner\'s roadmap to digital currency',
        category: 'Category',
        date: 'Jun 30, 2025',
        link: '/ethereum-review'
      },
      {
        title: 'Crypto made simple: A beginner\'s roadmap to digital currency',
        category: 'Category',
        date: 'Jun 30, 2025',
        link: '/coinbase-review'
      }
    ],
    relatedCategories: [
      { name: 'Bitcoin', link: '/coins' },
      { name: 'Ethereum', link: '/coins' },
      { name: 'Guides', link: '/guides' },
      { name: 'Analytics', link: '/analytics' },
      { name: 'Stories', link: '/stories' }
    ],
    showMarketRates: true,
    showFeaturedReview: true,
    featuredDescription: 'Comprehensive reviews and analysis of leading cryptocurrency exchanges. We analyze each platform based on our established methodology, considering factors like security, fees, user experience, and available features. Our reviews are conducted independently and provide you with unbiased insights to help you choose the right exchange.',
    articles: [
      {
        id: 1,
        title: 'Coinbase Review: Best for Beginners',
        category: 'Reviews',
        date: 'Jun 30, 2025',
        author: 'John Curator',
        icon: '₿',
        label: 'Review',
        theme: 'light',
        link: '/coinbase-review',
        buttonText: 'Read Review'
      },
      {
        id: 2,
        title: 'Kraken Review: Advanced Trading Platform',
        category: 'Reviews',
        date: 'Jun 30, 2025',
        author: 'John Curator',
        icon: '🔱',
        label: 'Review',
        theme: 'dark',
        link: '/kraken-review',
        buttonText: 'Read Review'
      }
    ]
  };
}
