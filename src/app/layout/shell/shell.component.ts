import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
  isLoading = true;
  private loadingTimer: any;
  private visitedRoutes = new Set<string>();

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
    // Слушаем события роутинга
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentRoute = event.urlAfterRedirects;

        // Логирование для отладки
        console.log('Переход на:', currentRoute);
        console.log('Посещенные роуты:', Array.from(this.visitedRoutes));

        // Проверяем, была ли страница уже посещена
        if (this.visitedRoutes.has(currentRoute)) {
          console.log('Страница в кеше - показываем сразу');
          this.isLoading = false;
        } else {
          console.log('Новая страница - показываем skeleton');
          this.isLoading = true;
          this.visitedRoutes.add(currentRoute);
          this.saveVisitedRoutes(); // Сохраняем в sessionStorage

          // Убираем skeleton через короткое время
          this.loadingTimer = setTimeout(() => {
            this.isLoading = false;
          }, 300);
        }
      });

    // Первоначальная загрузка
    const initialRoute = this.router.url;
    console.log('Начальный роут:', initialRoute);
    this.visitedRoutes.add(initialRoute);
    this.saveVisitedRoutes(); // Сохраняем начальный роут
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  ngOnDestroy() {
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }
  }
}
