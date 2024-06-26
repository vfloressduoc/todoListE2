import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignUpPage {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async signUp() {
    if (!this.validateEmail(this.email) || !this.password) {
      await this.presentAlert('Correo/contraseña inválidos');
      return;
    }

    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];
    const userExists = users.some(u => u.email === this.email);
    if (userExists) {
      await this.presentAlert('El correo ya está registrado');
    } else {
      users.push({ email: this.email, password: this.password });
      localStorage.setItem('users', JSON.stringify(users));
      this.router.navigateByUrl('/login');
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
