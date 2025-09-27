import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  standalone: true,
  imports: [NgClass]
})
export class FaqComponent {
  @Input() title: string = 'Frequently Asked Questions';
  @Input() description: string = 'Get answers to the most common questions about crypto exchanges';
  @Input() items: FaqItem[] = [];

  toggleItem(index: number): void {
    this.items[index].isOpen = !this.items[index].isOpen;
  }
}
