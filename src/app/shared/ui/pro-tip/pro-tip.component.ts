import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pro-tip',
  templateUrl: './pro-tip.component.html',
  styleUrl: './pro-tip.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ProTipComponent {
  @Input() text: string = '';
  @Input() title: string = 'Pro Tip:';
}
