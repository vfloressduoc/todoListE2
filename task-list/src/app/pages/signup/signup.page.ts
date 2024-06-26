import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignUpPage {
  email: string = '';
  password: string= '';

  constructor(private router: Router) {}

  signUp() {
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];
    const user = users.push({ email: this.email, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));

    this.router.navigateByUrl('/login');
  }
}
