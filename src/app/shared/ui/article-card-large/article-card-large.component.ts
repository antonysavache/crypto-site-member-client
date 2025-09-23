import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

export interface ArticleCardLargeData {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime?: string;
  imageUrl?: string;
  routerLink: string;
  primaryCta: string;
  primaryCtaLink: string;
  secondaryCta: string;
  secondaryCtaLink?: string;
  utmContent: string;
  analyticsCard: string;
  analyticsCta: string;
  gradient?: string;
  icon?: string;
}

@Component({
  selector: 'app-article-card-large',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-card-large.component.html',
  styleUrl: './article-card-large.component.scss'
})
export class ArticleCardLargeComponent {
  @Input({ required: true }) article!: ArticleCardLargeData;

  constructor(private router: Router) {}

  onCardClick(event: Event): void {
    // Prevent navigation if clicking on CTA buttons
    if ((event.target as HTMLElement).closest('.article-actions')) {
      return;
    }

    // Analytics for card click
    this.trackEvent(this.article.analyticsCard, {
      placement: 'home_feature',
      card: this.article.category.toLowerCase(),
      action: 'card',
      utm_content: this.article.utmContent
    });

    // Navigate to article
    this.router.navigate([this.article.routerLink]);
  }

  onCtaClick(event: Event, type: 'primary' | 'secondary'): void {
    event.stopPropagation(); // Prevent card click

    if (type === 'primary') {
      // Analytics for primary CTA
      this.trackEvent(this.article.analyticsCta, {
        placement: 'home_feature',
        card: this.article.category.toLowerCase(),
        action: 'cta',
        utm_content: this.article.utmContent
      });
    }
  }

  getAriaLabel(type: 'primary' | 'secondary'): string {
    if (type === 'primary') {
      return `${this.article.primaryCta} (affiliate link)`;
    }
    return this.article.secondaryCta;
  }

  private trackEvent(eventName: string, properties: any): void {
    // Analytics implementation - replace with your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
    console.log(`Analytics: ${eventName}`, properties);
  }
}
