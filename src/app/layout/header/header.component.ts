import { Component, signal, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NgClass]
})
export class HeaderComponent implements OnInit, OnDestroy {
  // Mobile menu state
  protected readonly isMenuOpen = signal(false);

  constructor(private router: Router) {}

  // Navigation links
  protected readonly navLinks = [
    { label: 'Kraken Review', href: '/kraken-review', active: false },
    { label: 'Coinbase Review', href: '/coinbase-review', active: true }, // По умолчанию активна
    { label: 'Bitcoin: Origin', href: '/bitcoin-origin', active: false }
  ];

  ngOnInit(): void {
    // Set initial active state based on current route
    this.updateActiveState(this.router.url);

    // Listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateActiveState(event.url);
      });
  }

  // Update active state based on current URL
  private updateActiveState(currentUrl: string): void {
    this.navLinks.forEach(link => {
      link.active = currentUrl === link.href || currentUrl.startsWith(link.href + '/');
    });
  }

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
  }

  // Cleanup on destroy
  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
