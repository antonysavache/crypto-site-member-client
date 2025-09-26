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
  private scrollPosition = 0; // Сохраняем позицию скролла

  constructor(private router: Router) {}

  // Navigation links
  protected readonly navLinks = [
    {
      label: 'Best for UK 🔥',
      mobileLabel: 'Best for UK 🔥',
      href: '/best-crypto-exchange-uk',
      active: false,
      ariaLabel: 'Best exchange for the UK (editor\'s pick)',
      title: 'Best crypto exchange for the UK',
      accent: true
    },
    { label: 'Learn', href: '/learn', active: false },
    { label: 'Guides', href: '/guides', active: false },
    { label: 'Coins', href: '/coins', active: false },
    { label: 'Security', href: '/security', active: false }
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

    if (this.isMenuOpen()) {
      // Сохраняем текущую позицию скролла
      this.scrollPosition = window.scrollY;

      // Блокируем скролл с фиксацией позиции
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      // Восстанавливаем скролл и позицию
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      // Возвращаемся к сохраненной позиции
      window.scrollTo(0, this.scrollPosition);
    }
  }

  // Close menu
  protected closeMenu(): void {
    this.isMenuOpen.set(false);

    // Восстанавливаем скролл и позицию
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    // Возвращаемся к сохраненной позиции
    window.scrollTo(0, this.scrollPosition);
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
    this.router.navigate([href]).then(() => {
      // Прокрутка в начало после навигации
      window.scrollTo(0, 0);
    });
  }

  // Cleanup on destroy
  ngOnDestroy(): void {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
  }
}
