import { Component } from '@angular/core';
import { CategoryComponent, CategoryConfig } from '../category/category.component';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  standalone: true,
  imports: [CategoryComponent]
})
export class CoinsComponent {

  coinsConfig: CategoryConfig = {
    title: 'Coins Review',
    description: 'Comprehensive reviews and analysis of major cryptocurrencies',
    popularItems: [
      {
        title: 'Bitcoin Review: The Original Cryptocurrency',
        category: 'Cryptocurrency',
        date: 'Jan 15, 2025',
        link: '/coins/bitcoin-review'
      },
      {
        title: 'Ethereum Review: Smart Contract Platform',
        category: 'Cryptocurrency',
        date: 'Jan 10, 2025',
        link: '/coins/ethereum-review'
      }
    ],
    relatedCategories: [
      { name: 'Exchanges', link: '/exchanges' },
      { name: 'Guides', link: '/guides' },
      { name: 'Security', link: '/security' }
    ],
    showMarketRates: true,
    showFeaturedReview: true,
    featuredDescription: 'In-depth analysis of major cryptocurrencies including Bitcoin and Ethereum. Our reviews cover technology, use cases, market position, and investment considerations.',
    articles: [
      {
        id: 1,
        title: 'Bitcoin Review: The Original Cryptocurrency',
        category: 'Cryptocurrency',
        date: 'Jan 15, 2025',
        author: 'Crypto Team',
        icon: '₿',
        label: 'Review',
        theme: 'light',
        link: '/coins/bitcoin-review',
        buttonText: 'Read Review'
      },
      {
        id: 2,
        title: 'Ethereum Review: Smart Contract Platform',
        category: 'Cryptocurrency',
        date: 'Jan 10, 2025',
        author: 'Crypto Team',
        icon: 'Ξ',
        label: 'Review',
        theme: 'dark',
        link: '/coins/ethereum-review',
        buttonText: 'Read Review'
      }
    ]
  };
}
