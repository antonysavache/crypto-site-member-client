import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ArticleCardData {
  title: string;
  category: string;
  date: string;
  imageUrl?: string;
  routerLink: string;
  gradient?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input({ required: true }) article!: ArticleCardData;
}
