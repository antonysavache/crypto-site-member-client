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
  useTextBackground?: boolean; // Флаг для подложки под текст
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

  getBackgroundStyle(): string {
    if (this.data.backgroundColor) {
      return this.data.backgroundColor;
    }

    // Дефолтный градиент
    return 'linear-gradient(145deg, #6146FF 0%, #3619DD 52%, #1900A8 100%)';
  }

  hasTextBackground(): boolean {
    return !!this.data.useTextBackground;
  }
}
