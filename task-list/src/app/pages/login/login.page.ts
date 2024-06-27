import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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
    private userService: UserService
  ) {}

  login() {
    const user = this.userService.login(this.email, this.password);
    if (user) {
      this.router.navigate(['/todo']);
    } else {
      console.log('Credenciales inválidas');
    }
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
