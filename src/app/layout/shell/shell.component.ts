import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SkeletonComponent } from '../../shared/ui/skeleton/skeleton.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SkeletonComponent]
})
export class ShellComponent implements OnInit {
  isLoading = false;
  private visitedRoutes = new Set<string>();
  private loadingTimeout: any;

  constructor(private router: Router) {
    // Восстанавливаем посещенные роуты из sessionStorage
    const cached = sessionStorage.getItem('visitedRoutes');
    if (cached) {
      this.visitedRoutes = new Set(JSON.parse(cached));
    }
  }

  private saveVisitedRoutes(): void {
    sessionStorage.setItem('visitedRoutes', JSON.stringify(Array.from(this.visitedRoutes)));
  }

  ngOnInit() {
    // Слушаем начало навигации
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        const targetRoute = event.url;

        console.log('NavigationStart:', targetRoute);
        console.log('Посещенные роуты:', Array.from(this.visitedRoutes));

        // ВСЕГДА показываем skeleton при начале навигации
        this.isLoading = true;

        // Для кешированных страниц делаем минимальную задержку
        if (this.visitedRoutes.has(targetRoute)) {
          console.log('Кешированная страница - короткий skeleton');
          this.loadingTimeout = setTimeout(() => {
            this.isLoading = false;
          }, 150); // Короткая задержка для кешированных
        } else {
          console.log('Новая страница - skeleton до загрузки');
          // Для новых страниц skeleton убирается только в NavigationEnd
        }
      });

    // Слушаем завершение навигации
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentRoute = event.urlAfterRedirects;

        console.log('NavigationEnd:', currentRoute);

        // Очищаем таймаут если он был
        if (this.loadingTimeout) {
          clearTimeout(this.loadingTimeout);
          this.loadingTimeout = null;
        }

        // Добавляем роут в кеш
        this.visitedRoutes.add(currentRoute);
        this.saveVisitedRoutes();

        // Скрываем skeleton после завершения навигации
        this.isLoading = false;
        console.log('Skeleton скрыт после NavigationEnd');
      });

    // Первоначальная загрузка
    const initialRoute = this.router.url;
    console.log('Первоначальная загрузка:', initialRoute);

    // Проверяем есть ли уже в кеше
    if (this.visitedRoutes.has(initialRoute)) {
      console.log('Начальная страница уже в кеше');
      this.isLoading = false;
    } else {
      console.log('Первый заход - показываем skeleton');
      this.isLoading = true;
      // Skeleton убирается автоматически при первом NavigationEnd
    }

    // Добавляем в кеш
    this.visitedRoutes.add(initialRoute);
    this.saveVisitedRoutes();
  }

  ngOnDestroy() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }
}
