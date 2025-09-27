import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrl: './button-secondary.component.scss',
  standalone: true,
  imports: [RouterLink]
})
export class ButtonSecondaryComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variant: 'default' | 'ghost' | 'outline' = 'default';
  @Input() color: 'primary' | 'gray' | 'blue' = 'primary';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() link: string = '#';
  @Input() external = false;

  get buttonClass(): string {
    return `btn-secondary btn-secondary--${this.size} btn-secondary--${this.variant} btn-secondary--${this.color}`;
  }
}
