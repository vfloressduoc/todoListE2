import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private toastController: ToastController
  ) {}

  async login() {
    const user = this.userService.login(this.email, this.password);
    if (user) {
      this.router.navigate(['/todo']);
    } else {
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
}
