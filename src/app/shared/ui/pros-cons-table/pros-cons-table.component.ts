import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

export interface ProsConsItem {
  text: string;
}

@Component({
  selector: 'app-pros-cons-table',
  templateUrl: './pros-cons-table.component.html',
  styleUrl: './pros-cons-table.component.scss',
  standalone: true,
})
export class ProsConsTableComponent {
  @Input() title: string = 'Commissions and licenses';
  @Input() description: string = 'Here you will find information on commissions, licenses, user support methods and other important parameters.';
  @Input() pros: ProsConsItem[] = [];
  @Input() cons: ProsConsItem[] = [];
  @Input() prosTitle: string = 'Pluses';
  @Input() consTitle: string = 'Minuses';
}
