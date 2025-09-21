import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss',
  standalone: true,
  imports: [NgFor]
})
export class ChecklistComponent {
  @Input() items: string[] = [];
  @Input() title: string = '';
}
