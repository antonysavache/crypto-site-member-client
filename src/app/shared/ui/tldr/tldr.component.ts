import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tldr',
  templateUrl: './tldr.component.html',
  styleUrl: './tldr.component.scss',
  standalone: true,
  imports: []
})
export class TldrComponent {
  @Input() items: string[] = [];
  @Input() title: string = 'TL;DR';
}
