import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu = false;
  showLogoutToast = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private userService: UserService,
    private toastController: ToastController
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
        }
      });
    });
  }

  shouldShowMenu(url: string): boolean {
    const hideMenuRoutes = ['/login', '/signup', '/add-task', '/edit-task'];
    return !hideMenuRoutes.includes(url);
  }

  async confirmLogout() {
    this.showLogoutToast = true;
    const toast = await this.toastController.create({
      message: 'Cerrando sesión...',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
    
    setTimeout(() => {
      this.logoutConfirmed();
    }, 2000); // Delay to simulate logout process
  }

  logoutConfirmed() {
    console.log('Cerrando sesión...');
    // Perform actual logout
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
