import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  private routerSub: any;
  isLoading: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private quotesService: QuotesService
  ) {}

  ionViewWillEnter() {
    this.clearFields();
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      duration: 2000
    });

    await loading.present();

    const user = this.userService.login(this.email, this.password);
    if (user) {
      setTimeout(async () => {
        await loading.dismiss();
        this.router.navigate(['/todo']).then(() => {
          this.quotesService.fetchRandomMessage(); // Mostrar la alerta después de la navegación
        });
      }, 2000);
    } else {
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: 'Credenciales inválidas',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
    this.clearFields();
  }

  clearFields() {
    this.email = '';
    this.password = '';
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}

export default LoginPage;
