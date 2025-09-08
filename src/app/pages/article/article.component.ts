import { Component, signal, OnInit, HostListener } from '@angular/core';
import { TldrComponent, TldrItem } from '../../shared/ui/tldr/tldr.component';
import { TableOfContentsComponent } from '../../shared/ui/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  standalone: true,
  imports: [TldrComponent, TableOfContentsComponent]
})
export class ArticleComponent implements OnInit {
  protected readonly isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize')
  protected checkMobile(): void {
    this.isMobile.set(window.innerWidth < 1025);
  }
  protected readonly tldrItems: TldrItem[] = [
    {
      text: 'Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed. Tincidunt porttitor in pharetra egestas sit neque ac lacus. Amet a nunc at neque ac. Odio at volutpat volutpat in leo eget ipsum diam elementum. Erat magna arcu orci lorem senectus orci fringilla.'
    },
    {
      text: 'Choose reputable exchanges with strong security measures and regulatory compliance.'
    },
    {
      text: 'Always enable two-factor authentication and use hardware wallets for large amounts.'
    },
    {
      text: 'Research and understand the fees, supported cryptocurrencies, and withdrawal limits.'
    }
  ];

  protected readonly article = {
    title: 'Crypto simplified and digital investments accessible for everyone',
    author: 'Ivan Ivanov',
    date: 'August 2025',
    category: 'Overview',
    heroImage: {
      src: 'https://via.placeholder.com/800x400/6146FF/FFFFFF?text=How+to+Buy+Bitcoin+Safely',
      alt: 'How to Buy Bitcoin Safely'
    },
    content: `
      <h2>What is Bitcoin Trading?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <h3>Key Security Principles</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <ul>
        <li>Security should be your top priority</li>
        <li>Choose reputable exchanges</li>
        <li>Enable two-factor authentication</li>
        <li>Store large amounts in cold wallets</li>
      </ul>

      <h2>Choosing the Right Exchange</h2>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

      <h3>Regulatory Compliance</h3>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

      <h3>Fee Structure Analysis</h3>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>

      <h2>Advanced Trading Strategies</h2>
      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>

      <h3>Dollar Cost Averaging</h3>
      <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

      <h3>Technical Analysis Basics</h3>
      <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>

      <h2>Risk Management</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    `
  };
}
