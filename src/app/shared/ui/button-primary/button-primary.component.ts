import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
  standalone: true,
  imports: [RouterLink]
})
export class ButtonPrimaryComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() link: string = '#'; // Всегда ссылка, по дефолту #
  @Input() external = false; // true = href, false = routerLink

  get buttonClass(): string {
    return `btn-primary btn-primary--${this.size}`;
  }
}
