import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private toastController: ToastController
  ) {}

  async signUp() {
    if (!this.validateEmail(this.email)) {
      const toast = await this.toastController.create({
        message: 'El formato del correo electrónico no es válido',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      return;
    }

    this.userService.createUser(this.email, this.password);
    const toast = await this.toastController.create({
      message: 'Usuario creado exitosamente',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
    console.log('Usuario creado:', { email: this.email, password: this.password });
    this.router.navigate(['/login']);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  goToLogin() {
    this.router.navigate(['/login']);
    this.clearFields();
  }

  clearFields() {
    this.email = '';
    this.password = '';
  }
}
