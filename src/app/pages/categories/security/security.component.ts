import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CategoryHeroComponent, CategoryHeroData} from '../../../shared/ui/category-hero/category-hero.component';
import {
  CategoryControlsComponent,
  CategoryControlsConfig
} from '../../../shared/ui/category-controls/category-controls.component';
import {CategoryGridComponent} from '../../../shared/ui/category-grid/category-grid.component';
import {CategorySidebarComponent, SidebarData} from '../../../shared/ui/category-sidebar/category-sidebar.component';
import {ReviewCardData} from '../../../shared/ui/review-card/review-card.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss',
  standalone: true,
  imports: [RouterLink, CategoryHeroComponent, CategoryControlsComponent, CategoryGridComponent, CategorySidebarComponent]
})
export class SecurityComponent {
  // Hero configuration
  heroData: CategoryHeroData = {
    title: 'Security & Taxes',
    subtitle: 'Essential guides to keep your crypto safe and stay compliant with UK tax regulations.',
    stats: '7 guides • Updated Jun 2025',
    primaryCta: {
      text: 'Security basics →',
      link: '/security/basics'
    },
    secondaryCta: {
      text: 'Tax guide →',
      link: '/security/taxes'
    },
    backgroundColor: "url('/images/categories/security/security-hero.png') center/cover no-repeat",
    useTextBackground: true
  };

  // Controls configuration
  controlsConfig: CategoryControlsConfig = {
    filterChips: [
      { name: 'All', active: true, value: 'all' },
      { name: 'Security', active: false, value: 'security' },
      { name: 'Taxes', active: false, value: 'taxes' },
      { name: 'Compliance', active: false, value: 'compliance' },
      { name: 'Scams', active: false, value: 'scams' }
    ],
    sortOptions: [
      { name: 'Newest', value: 'newest', active: true },
      { name: 'Updated', value: 'updated', active: false },
      { name: 'A–Z', value: 'alphabetical', active: false },
      { name: 'Priority', value: 'priority', active: false },
      { name: 'Most read', value: 'most-read', active: false }
    ],
    searchPlaceholder: 'Search security guides…',
    showSearch: true,
    showSort: true
  };

  // Security guide cards data
  reviewCards: ReviewCardData[] = [
    {
      id: 1,
      title: 'Avoid Common Crypto Scams (2025)',
      category: 'Security',
      date: 'Jun 30, 2025',
      readTime: '6–8 min read',
      author: 'Security Team',
      icon: '🛡️',
      label: 'GUIDE',
      theme: 'light',
      link: '/security/crypto-scams',
      buttonText: 'Read Guide',
      teaser: 'Red flags, fake support, phishing and "too-good-to-be-true" yields — how to verify links, wallets and apps.',
      imageUrl: '/images/home/security-avoid-scams-article-preview.png',
      coinTag: 'scams'
    },
    {
      id: 2,
      title: 'UK Crypto Taxes — 2025 Basics',
      category: 'Taxes',
      date: 'Jun 30, 2025',
      readTime: '7–9 min read',
      author: 'Tax Team',
      icon: '💼',
      label: 'GUIDE',
      theme: 'light',
      link: '/security/uk-crypto-tax-basics',
      buttonText: 'Read Guide',
      teaser: 'Income vs capital gains, HMRC rules, allowances, record-keeping and simple examples for beginners.',
      imageUrl: '/images/home/security-taxes-explaining-article-preview.png',
      coinTag: 'taxes'
    },
    {
      id: 3,
      title: 'Crypto Risks & Security Hub',
      category: 'Security',
      date: 'Jun 25, 2025',
      readTime: '8–10 min read',
      author: 'Security Team',
      icon: '🔒',
      label: 'GUIDE',
      theme: 'light',
      link: '/security/crypto-risks',
      buttonText: 'Read Guide',
      teaser: 'Comprehensive overview of crypto risks, from exchange hacks to wallet security best practices.',
      coinTag: 'security'
    },
    {
      id: 4,
      title: 'Setting Up Hardware Wallets',
      category: 'Security',
      date: 'Jun 20, 2025',
      readTime: '9–11 min read',
      author: 'Security Team',
      icon: '🔐',
      label: 'GUIDE',
      theme: 'light',
      link: '/security/hardware-wallets',
      buttonText: 'Read Guide',
      teaser: 'Step-by-step setup for Ledger and Trezor — secure your crypto with cold storage.',
      coinTag: 'security'
    },
    {
      id: 5,
      title: 'HMRC Crypto Reporting Requirements',
      category: 'Compliance',
      date: 'Jun 15, 2025',
      readTime: '6–8 min read',
      author: 'Tax Team',
      icon: '📋',
      label: 'GUIDE',
      theme: 'light',
      link: '/security/hmrc-reporting',
      buttonText: 'Read Guide',
      teaser: 'What triggers reporting requirements and how to stay compliant with UK crypto regulations.',
      coinTag: 'compliance'
    },
    {
      id: 6,
      title: 'Exchange Security Checklist',
      category: 'Security',
      date: 'Jun 10, 2025',
      readTime: '5–7 min read',
      author: 'Security Team',
      icon: '✅',
      label: 'GUIDE',
      theme: 'light',
      link: '/security/exchange-security',
      buttonText: 'Read Guide',
      teaser: '2FA, withdrawal limits, API security and other essential settings to secure your exchange accounts.',
      coinTag: 'security'
    },
    {
      id: 7,
      title: 'Crypto Record Keeping for UK Taxes',
      category: 'Taxes',
      date: 'Jun 5, 2025',
      readTime: '7–9 min read',
      author: 'Tax Team',
      icon: '📊',
      label: 'GUIDE',
      theme: 'light',
      link: '/security/crypto-records',
      buttonText: 'Read Guide',
      teaser: 'Track purchases, sales, and DeFi activities — templates and tools for accurate tax reporting.',
      coinTag: 'taxes'
    }
  ];

  // Sidebar configuration
  sidebarData: SidebarData = {
    popularArticles: [
      {
        title: 'Avoid Common Crypto Scams',
        category: 'Security',
        date: 'Jun 30, 2025',
        link: '/security/crypto-scams'
      },
      {
        title: 'UK Crypto Tax Basics',
        category: 'Taxes',
        date: 'Jun 30, 2025',
        link: '/security/uk-crypto-tax-basics'
      },
      {
        title: 'Hardware Wallet Setup',
        category: 'Security',
        date: 'Jun 20, 2025',
        link: '/security/hardware-wallets'
      }
    ],
    relatedCategories: [
      {
        name: 'How-to Guides',
        description: 'Step-by-step tutorials',
        link: '/guides'
      },
      {
        name: 'Learn Crypto',
        description: 'Crypto fundamentals',
        link: '/learn'
      },
      {
        name: 'Coin Reviews',
        description: 'Independent crypto reviews',
        link: '/coins'
      }
    ],
    customBlocks: [
      {
        title: '🚨 Security Alert',
        content: 'Never share your private keys or seed phrases. Legitimate support will never ask for these details.',
        type: 'warning'
      },
      {
        title: '💼 Tax Deadline',
        content: 'UK self-assessment deadline is 31st January. Get your crypto records ready early.',
        type: 'info'
      }
    ],
    showBestForUK: false,
    showNewsletter: false
  };

  searchQuery = '';
  currentFilter = 'all';
  currentSort = 'newest';

  // Event handlers
  onFilterChange(filter: string) {
    this.currentFilter = filter;
    this.controlsConfig.filterChips.forEach(chip => chip.active = chip.value === filter);
  }

  onSearchChange(query: string) {
    this.searchQuery = query;
  }

  onSortChange(sort: string) {
    this.currentSort = sort;
    this.controlsConfig.sortOptions.forEach(option => option.active = option.value === sort);
  }

  onClearFilters() {
    this.currentFilter = 'all';
    this.searchQuery = '';
    this.controlsConfig.filterChips.forEach(chip => chip.active = chip.value === 'all');
  }

  getFilteredCards(): ReviewCardData[] {
    let cards = this.reviewCards;

    // Apply filter
    if (this.currentFilter !== 'all') {
      cards = cards.filter(card => card.coinTag === this.currentFilter);
    }

    // Apply search
    if (this.searchQuery) {
      cards = cards.filter(card =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (card.teaser && card.teaser.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    }

    return cards;
  }
}
