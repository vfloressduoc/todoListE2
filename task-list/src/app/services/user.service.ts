import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authenticated: boolean = false;
  private users: any[] = [];

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  login(email: string, password: string): boolean {
    const user = this.findUserByEmail(email);
    if (user && user.password === password) {
      this.authenticated = true;
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    } else {
      this.authenticated = false;
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getCurrentUser(): any {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return loggedInUser ? JSON.parse(loggedInUser) : null;
  }

  logout(): void {
    this.authenticated = false;
    localStorage.removeItem('loggedInUser');
  }

  createUser(email: string, password: string): void {
    const newUser = { email, password };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  findUserByEmail(email: string): any {
    return this.users.find((user: any) => user.email === email);
  }
}
