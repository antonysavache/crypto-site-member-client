import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrl: './bullet-list.component.scss',
  standalone: true,
  imports: [NgFor]
})
export class BulletListComponent {
  @Input() items: string[] = [];
}
