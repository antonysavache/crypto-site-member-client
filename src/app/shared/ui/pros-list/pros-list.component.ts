import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

export interface ProsItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-pros-list',
  templateUrl: './pros-list.component.html',
  styleUrl: './pros-list.component.scss',
  standalone: true,
})
export class ProsListComponent {
  @Input() items: ProsItem[] = [];
  @Input() title?: string; // Опциональный заголовок для всего списка
}
