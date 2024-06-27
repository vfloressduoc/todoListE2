import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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
    private userService: UserService
  ) {}

  signUp() {
    if (!this.validateEmail(this.email)) {
      console.log('El formato del correo electrónico no es válido');
      return;
    }

    this.userService.createUser(this.email, this.password);
    console.log('Usuario creado:', { email: this.email, password: this.password });
    this.router.navigate(['/login']);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
