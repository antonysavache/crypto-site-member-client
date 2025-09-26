import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface CategoryHeroData {
  title: string;
  subtitle: string;
  stats: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta: {
    text: string;
    link: string;
  };
  heroImage?: string;
  backgroundColor?: string;
}

@Component({
  selector: 'app-category-hero',
  templateUrl: './category-hero.component.html',
  styleUrl: './category-hero.component.scss',
  standalone: true,
  imports: [RouterLink]
})
export class CategoryHeroComponent {
  @Input() data!: CategoryHeroData;

  getFormattedTitle(title: string): string {
    // Принудительный перенос после "—" для Learn страницы
    if (title.includes('Learn Crypto — Clear,')) {
      return 'Learn Crypto —\nClear, Evergreen, Trusted';
    }
    return title;
  }

  getDefaultBackground(): string {
    return `
      linear-gradient(145deg, #6146FF 0%, #3619DD 52%, #1900A8 100%),
      radial-gradient(1200px 600px at 20% 10%, rgba(255,255,255,0.12), transparent 60%)
    `;
  }
}
