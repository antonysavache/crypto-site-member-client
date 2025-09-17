import { Component, Input } from '@angular/core';

export interface KeyValueTableItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-key-value-table',
  templateUrl: './key-value-table.component.html',
  styleUrl: './key-value-table.component.scss',
  standalone: true
})
export class KeyValueTableComponent {
  @Input() title: string = 'Key facts';
  @Input() items: KeyValueTableItem[] = [];
}
