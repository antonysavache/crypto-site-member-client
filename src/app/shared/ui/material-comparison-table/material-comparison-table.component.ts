import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgClass } from '@angular/common';

export interface MaterialComparisonColumn {
  key: string;
  title: string;
  type?: 'text' | 'percentage' | 'highlight';
}

export interface MaterialComparisonRow {
  [key: string]: string | number;
}

@Component({
  selector: 'app-material-comparison-table',
  templateUrl: './material-comparison-table.component.html',
  styleUrl: './material-comparison-table.component.scss',
  standalone: true,
  imports: [MatTableModule, NgClass]
})
export class MaterialComparisonTableComponent {
  @Input() title: string = 'Comparison with competitors';
  @Input() columns: MaterialComparisonColumn[] = [];
  @Input() rows: MaterialComparisonRow[] = [];
  @Input() highlightRowIndex?: number;

  get displayedColumns(): string[] {
    return this.columns.map(col => col.key);
  }

  getColumnType(columnKey: string): string | undefined {
    return this.columns.find(col => col.key === columnKey)?.type;
  }
}
