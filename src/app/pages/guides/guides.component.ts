import { Component } from '@angular/core';
import { CategoryComponent, CategoryConfig } from '../category/category.component';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  standalone: true,
  imports: [CategoryComponent]
})
export class GuidesComponent {

  guidesConfig: CategoryConfig = {
    title: 'Guides',
    description: 'Step-by-step guides for buying, trading, and managing cryptocurrency',
    popularItems: [
      {
        title: 'How to Buy ETH in the UK — Kraken Walkthrough (2025)',
        category: 'Buying Guide',
        date: 'Jan 15, 2025',
        link: '/guides/how-to-buy-eth-uk'
      }
    ],
    relatedCategories: [
      { name: 'Exchanges', link: '/exchanges' },
      { name: 'Coins Review', link: '/coins' },
      { name: 'Security', link: '/security' }
    ],
    showMarketRates: false,
    showFeaturedReview: true,
    featuredDescription: 'Comprehensive step-by-step guides to help you navigate the cryptocurrency world safely and efficiently.',
    articles: [
      {
        id: 1,
        title: 'How to Buy ETH in the UK — Kraken Walkthrough (2025)',
        category: 'Buying Guide',
        date: 'Jan 15, 2025',
        author: 'John Curator',
        icon: '📚',
        label: 'Guide',
        theme: 'light',
        link: '/guides/how-to-buy-eth-uk',
        buttonText: 'Read Guide'
      }
    ]
  };
}
