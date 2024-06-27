import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private userService: UserService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
      if (loggedInUser) {
        this.userService.login(loggedInUser.email, loggedInUser.password);
      }

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const currentUrl = this.router.url;
          this.showMenu = this.shouldShowMenu(currentUrl);
          if (currentUrl === '/home' && this.userService.isAuthenticated()) {
            this.router.navigate(['/todo']);
          } else if (currentUrl === '/home' && !this.userService.isAuthenticated()) {
            this.router.navigate(['/login']);
          }
        }
      });
    });
  }

  shouldShowMenu(url: string): boolean {
    const hideMenuRoutes = ['/login', '/signup', '/add-task', '/edit-task'];
    return !hideMenuRoutes.includes(url);
  }
}
