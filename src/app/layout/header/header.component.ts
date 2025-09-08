import { Component, signal, HostListener, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
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

  // Scroll state for header styling
  private isScrolled = false;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // Отключаем браузерные swipe/edge gestures на мобилке
    if (typeof window !== 'undefined') {
      document.addEventListener('touchstart', this.preventEdgeSwipe, { passive: false });
      document.addEventListener('touchmove', this.preventEdgeSwipe, { passive: false });
    }
  }

  // Navigation links
  protected readonly navLinks = [
    { label: 'Главная', href: '/home', active: true },
    { label: 'Участники', href: '/members', active: false },
    { label: 'Статья (демо)', href: '/article', active: false },
    { label: 'Руководства', href: '/guides', active: false },
    { label: 'Настройки', href: '/settings', active: false }
  ];

  // Listen to scroll events for header animation
  @HostListener('window:scroll')
  protected onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldHaveScrolledClass = scrollTop > 50;

    if (shouldHaveScrolledClass !== this.isScrolled) {
      this.isScrolled = shouldHaveScrolledClass;
      const headerElement = this.elementRef.nativeElement.querySelector('.app-header');

      if (headerElement) {
        if (this.isScrolled) {
          this.renderer.addClass(headerElement, 'scrolled');
        } else {
          this.renderer.removeClass(headerElement, 'scrolled');
        }
      }
    }
  }

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

    // Navigate using Angular Router
    this.router.navigate([href]);

    // Update active state (в реальном приложении это делал бы Router)
    this.navLinks.forEach(link => {
      link.active = link.href === href;
    });
  }

  // Cleanup on destroy
  ngOnDestroy(): void {
    document.body.classList.remove('menu-open');

    // Удаляем event listeners
    if (typeof window !== 'undefined') {
      document.removeEventListener('touchstart', this.preventEdgeSwipe);
      document.removeEventListener('touchmove', this.preventEdgeSwipe);
    }
  }

  // Предотвращаем edge swipe который может открывать меню
  private preventEdgeSwipe = (event: TouchEvent): void => {
    // Проверяем если swipe начинается с края экрана
    const touch = event.touches[0];
    if (touch && touch.clientX < 20) { // Левый край экрана
      event.preventDefault();
      event.stopPropagation();
    }
  };
}
