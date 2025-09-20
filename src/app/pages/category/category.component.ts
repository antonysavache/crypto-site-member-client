import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface CategoryConfig {
  title: string;
  description: string;
  popularItems: { title: string; category: string; date: string; link: string }[];
  relatedCategories: { name: string; link: string }[];
  articles: any[];
  showMarketRates?: boolean;
  showFeaturedReview?: boolean;
  featuredDescription?: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class CategoryComponent {
  @Input() categoryConfig!: CategoryConfig;
}
