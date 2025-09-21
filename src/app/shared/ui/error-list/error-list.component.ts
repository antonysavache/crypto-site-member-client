import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrl: './error-list.component.scss',
  standalone: true,
  imports: [NgFor]
})
export class ErrorListComponent {
  @Input() items: string[] = [];
  @Input() title: string = '';
}
