import { Component, Input } from '@angular/core';

export interface TldrItem {
  text: string;
}

@Component({
  selector: 'app-tldr',
  templateUrl: './tldr.component.html',
  styleUrl: './tldr.component.scss',
  standalone: true,
  imports: []
})
export class TldrComponent {
  @Input() items: TldrItem[] = [];
  @Input() title: string = 'TL;DR';
}