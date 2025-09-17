import { Component, signal, HostListener, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  // Navigation links
  protected readonly navLinks = [
    { label: 'Главная', href: '/home', active: true },
    { label: 'Участники', href: '/members', active: false },
    { label: 'Статья (демо)', href: '/coinbase-review', active: false },
    { label: 'Bitcoin: Происхождение', href: '/bitcoin-origin', active: false },
    { label: 'Руководства', href: '/guides', active: false },
    { label: 'Настройки', href: '/settings', active: false }
  ];

  // Toggle mobile menu
  protected toggleMenu(): void {
    this.isMenuOpen.update(current => !current);

    // Управление скроллом body при открытии
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Close menu
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  // Close menu on escape key
  @HostListener('document:keydown.escape')
  protected closeMenuOnEscape(): void {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }

  // Handle nav link click
  protected onNavLinkClick(href: string): void {
    // Close mobile menu when navigating
    this.closeMenu();

    // Navigate using Angular Router
    this.router.navigate([href]);

    // Update active state
    this.navLinks.forEach(link => {
      link.active = link.href === href;
    });
  }

  // Cleanup on destroy
  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
