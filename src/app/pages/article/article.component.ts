import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  standalone: true,
  imports: []
})
export class ArticleComponent {
  protected readonly article = {
    title: 'Crypto simplified and digital investments accessible for everyone',
    author: 'Ivan Ivanov',
    date: 'August 2025',
    category: 'Overview',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'DeFi', href: '/category/defi' }
    ],
    heroImage: {
      src: 'https://via.placeholder.com/800x400/6146FF/FFFFFF?text=How+to+Buy+Bitcoin+Safely',
      alt: 'How to Buy Bitcoin Safely'
    },
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h3>Key Points to Remember</h3>
      
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <ul>
        <li>Security should be your top priority</li>
        <li>Choose reputable exchanges</li>
        <li>Enable two-factor authentication</li>
        <li>Store large amounts in cold wallets</li>
      </ul>
      
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      
      <h3>Getting Started</h3>
      
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
    `
  };
}