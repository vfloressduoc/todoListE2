import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string= '';

  constructor(private router: Router) {}

  login() {
    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];
    const user = users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid credentials');
    }
  }

  goToSignUp() {
    this.router.navigateByUrl('/signup');
  }
}
