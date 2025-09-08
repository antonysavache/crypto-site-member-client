import { Component, Input, OnInit, OnDestroy, signal, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

export interface TocItem {
  id: string;
  title: string;
  level: number; // h2 = 2, h3 = 3, etc.
  element?: HTMLElement;
}

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.scss',
  standalone: true,
  imports: [NgClass]
})
export class TableOfContentsComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Best Stock Trading Apps of 2025';
  @Input() contentSelector: string = '.article-content'; // CSS selector для поиска заголовков
  @Input() showMobile: boolean = false; // Показывать ли мобильную версию

  protected readonly tocItems = signal<TocItem[]>([]);
  protected readonly activeItemId = signal<string>('');
  protected readonly isMobileOpen = signal<boolean>(false);
  protected readonly currentActiveTitle = signal<string>('');

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    // Небольшая задержка чтобы innerHTML успел отрендериться
    setTimeout(() => {
      this.generateTocItems();
      this.setupIntersectionObserver();
    }, 500);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  // Закрываем мобильное меню при клике вне его
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as Element;
    const tocElement = target.closest('.mobile-toc');

    if (!tocElement && this.isMobileOpen()) {
      this.isMobileOpen.set(false);
    }
  }

  // Генерируем элементы TOC из заголовков в статье
  private generateTocItems(): void {
    const contentElement = document.querySelector(this.contentSelector);
    if (!contentElement) return;

    // Ищем все заголовки h2, h3, h4
    const headings = contentElement.querySelectorAll('h2, h3, h4');
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      const element = heading as HTMLElement;
      const level = parseInt(element.tagName.charAt(1)); // h2 -> 2, h3 -> 3

      // Создаем ID если его нет
      let id = element.id;
      if (!id) {
        id = `heading-${index}`;
        element.id = id;
      }

      items.push({
        id,
        title: element.textContent || '',
        level,
        element
      });
    });

    this.tocItems.set(items);

    // Устанавливаем первый заголовок как активный
    if (items.length > 0) {
      this.currentActiveTitle.set(items[0].title);
    }
  }

  // Настраиваем Intersection Observer для отслеживания видимых заголовков
  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-100px 0px -80% 0px', // Активируем когда заголовок в верхней части экрана
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      // Ищем самый верхний видимый заголовок
      const visibleHeadings = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visibleHeadings.length > 0) {
        const activeElement = visibleHeadings[0].target as HTMLElement;
        this.activeItemId.set(activeElement.id);

        // Обновляем заголовок для мобильной версии
        const activeItem = this.tocItems().find(item => item.id === activeElement.id);
        if (activeItem) {
          this.currentActiveTitle.set(activeItem.title);
        }
      }
    }, options);

    // Наблюдаем за всеми заголовками
    this.tocItems().forEach(item => {
      if (item.element) {
        this.observer!.observe(item.element);
      }
    });
  }

  // Скролл к выбранному заголовку
  protected scrollToHeading(item: TocItem): void {
    if (!item.element) return;

    const headerHeight = 100; // Высота sticky header
    const elementTop = item.element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });

    // Обновляем активный элемент
    this.activeItemId.set(item.id);
    this.currentActiveTitle.set(item.title);

    // Закрываем мобильное меню
    this.isMobileOpen.set(false);
  }

  // Переключаем мобильное меню
  protected toggleMobileMenu(): void {
    this.isMobileOpen.update(current => !current);
  }
}
