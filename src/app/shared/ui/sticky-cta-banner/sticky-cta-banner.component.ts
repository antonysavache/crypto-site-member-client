import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-cta-banner',
  templateUrl: './sticky-cta-banner.component.html',
  styleUrl: './sticky-cta-banner.component.scss',
  standalone: true
})
export class StickyCTABannerComponent {
  @Input() title: string = 'Ready to Start?';
  @Input() description: string = 'Join thousands of users and get started today';
  @Input() ctaText: string = 'Get Started';
  @Input() ctaLink: string = '#';
}
