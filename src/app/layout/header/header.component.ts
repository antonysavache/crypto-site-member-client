import { Component, signal, HostListener, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NgClass]
})
export class HeaderComponent implements OnDestroy {
  // Mobile menu state
  protected readonly isMenuOpen = signal(false);

  // Navigation links
  protected readonly navLinks = [
    { label: 'Главная', href: '/home', active: true },
    { label: 'Участники', href: '/members', active: false },
    { label: 'Руководства', href: '/guides', active: false },
    { label: 'Настройки', href: '/settings', active: false }
  ];

  // Toggle mobile menu
  protected toggleMenu(): void {
    this.isMenuOpen.update(current => {
      const newState = !current;

      // Управление скроллом body
      if (newState) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }

      return newState;
    });
  }

  // Close menu on escape key
  @HostListener('document:keydown.escape')
  protected closeMenuOnEscape(): void {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
      document.body.classList.remove('menu-open');
    }
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  protected closeMenuOnClickOutside(event: Event): void {
    const target = event.target as Element;
    const header = target.closest('.app-header');

    if (!header && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
      document.body.classList.remove('menu-open');
    }
  }

  // Handle nav link click
  protected onNavLinkClick(href: string): void {
    // Close mobile menu when navigating
    this.isMenuOpen.set(false);
    document.body.classList.remove('menu-open');

    // Update active state (в реальном приложении это делал бы Router)
    this.navLinks.forEach(link => {
      link.active = link.href === href;
    });
  }

  // Cleanup on destroy
  ngOnDestroy(): void {
    document.body.classList.remove('menu-open');
  }
}
