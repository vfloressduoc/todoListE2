import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu = false;
  logoutAlert: HTMLIonAlertElement | null = null;

  constructor(
    private platform: Platform,
    private router: Router,
    private userService: UserService,
    private alertController: AlertController
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
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            this.showLogoutAlert();
          }
        }
      ]
    });

    await alert.present();
  }

  async showLogoutAlert() {
    this.logoutAlert = await this.alertController.create({
      message: 'Cerrando sesión...',
      backdropDismiss: false, // Evita cerrar el alert tocando fuera de él
    });

    await this.logoutAlert.present();

    setTimeout(() => {
      this.logoutConfirmed();
    }, 1000); // Delay de 1 segundo antes de cerrar sesión
  }

  async logoutConfirmed() {
    console.log('Cerrando sesión...');
    // Perform actual logout
    this.userService.logout();
    this.router.navigate(['/login']).then(() => {
      if (this.logoutAlert) {
        this.logoutAlert.dismiss();
        this.logoutAlert = null;
      }
    });
  }
}
