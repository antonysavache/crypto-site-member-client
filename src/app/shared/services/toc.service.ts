import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TocItem {
  id: string;
  title: string;
  level: number; // 2 = h2, 3 = h3, 4 = h4
}

export interface TocConfig {
  title: string;
  items: TocItem[];
  contentSelector?: string; // для скролла к элементам, по умолчанию '.article-content'
}

@Injectable({
  providedIn: 'root'
})
export class TocService {
  private readonly tocConfig$ = new BehaviorSubject<TocConfig | null>(null);
  private readonly activeItemId$ = new BehaviorSubject<string>('');

  /**
   * Подписка на текущую конфигурацию TOC
   * Header компонент использует это для отображения мобильной TOC
   */
  getCurrentToc(): Observable<TocConfig | null> {
    return this.tocConfig$.asObservable();
  }

  /**
   * Подписка на активный элемент TOC
   * Используется для подсветки текущего раздела
   */
  getActiveItem(): Observable<string> {
    return this.activeItemId$.asObservable();
  }

  /**
   * Регистрация TOC для текущей страницы
   * Вызывается в ngOnInit компонента страницы
   */
  registerToc(config: TocConfig): void {
    // Устанавливаем дефолтный селектор если не указан
    const fullConfig: TocConfig = {
      ...config,
      contentSelector: config.contentSelector || '.article-content'
    };

    this.tocConfig$.next(fullConfig);
    
    // Устанавливаем первый элемент как активный
    if (config.items.length > 0) {
      this.activeItemId$.next(config.items[0].id);
    }
  }

  /**
   * Очистка TOC
   * Вызывается в ngOnDestroy компонента страницы
   */
  clearToc(): void {
    this.tocConfig$.next(null);
    this.activeItemId$.next('');
  }

  /**
   * Установка активного элемента
   * Вызывается при скролле страницы или клике на элемент TOC
   */
  setActiveItem(itemId: string): void {
    this.activeItemId$.next(itemId);
  }

  /**
   * Скролл к элементу по ID
   * Унифицированный метод для скролла как из мобильной, так и desktop TOC
   */
  scrollToItem(itemId: string, headerHeight: number = 100): void {
    const element = document.getElementById(itemId);
    if (!element) return;

    const elementTop = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });

    // Обновляем активный элемент
    this.setActiveItem(itemId);
  }

  /**
   * Получение текущей конфигурации (snapshot)
   * Используется когда нужно получить данные синхронно
   */
  getCurrentTocSnapshot(): TocConfig | null {
    return this.tocConfig$.value;
  }

  /**
   * Получение текущего активного элемента (snapshot)
   */
  getActiveItemSnapshot(): string {
    return this.activeItemId$.value;
  }
}
