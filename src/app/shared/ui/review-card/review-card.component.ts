import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ReviewCardData {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  icon: string;
  label: string;
  theme: 'light' | 'dark';
  link: string;
  buttonText: string;
  imageUrl?: string;
  readTime?: string;
  featured?: boolean;
  teaser?: string;
}

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  @Input({ required: true }) review!: ReviewCardData;

  getCoinName(title: string): string {
    if (title.includes('Bitcoin')) return 'Bitcoin (BTC)';
    if (title.includes('Ethereum')) return 'Ethereum (ETH)';
    if (title.includes('Solana')) return 'Solana (SOL)';
    return title;
  }
}
