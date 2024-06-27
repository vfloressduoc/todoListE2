import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async addUser(user: User): Promise<any> {
    return this.storage.set(user.email, user);
  }

  async getUser(email: string): Promise<User> {
    return this.storage.get(email);
  }

  async login(email: string, password: string): Promise<boolean> {
    const user = await this.getUser(email);
    if (user && user.password === password) {
      await this.storage.set('loggedInUser', email);
      return true;
    }
    return false;
  }

  async logout(): Promise<void> {
    await this.storage.remove('loggedInUser');
  }

  async isLoggedIn(): Promise<boolean> {
    const user = await this.storage.get('loggedInUser');
    return !!user;
  }
}
