import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

export interface ComparisonColumn {
  key: string;
  title: string;
  type?: 'text' | 'percentage' | 'highlight'; // Тип для стилизации
}

export interface ComparisonRow {
  [key: string]: string | number;
}

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrl: './comparison-table.component.scss',
  standalone: true,
  imports: [NgFor, NgClass]
})
export class ComparisonTableComponent {
  @Input() title: string = 'Comparison with competitors';
  @Input() columns: ComparisonColumn[] = [];
  @Input() rows: ComparisonRow[] = [];
  @Input() highlightRowIndex?: number;
}
