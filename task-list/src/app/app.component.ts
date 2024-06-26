import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showMenu = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd | NavigationStart =>
        event instanceof NavigationEnd || event instanceof NavigationStart
      )
    ).subscribe((event: NavigationEnd | NavigationStart) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = this.shouldShowMenu(event.url);
      } else if (event instanceof NavigationStart) {
        // Optionally handle NavigationStart events if needed
      }
    });
  }

  private shouldShowMenu(url: string): boolean {
    const allowedRoutes = [
      '/memories',
      '/todo',
      '/week',
      '/archive'
    ];
    const excludedRoutes = [
      '/login',
      '/signup',
      '/add-task',
      '/edit-task'
    ];
  
    return allowedRoutes.some(route => url.startsWith(route))
      && !excludedRoutes.some(route => url.startsWith(route));
  }
  
}
