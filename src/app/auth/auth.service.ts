import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private loggedIn = false;
  private readonly STORAGE_KEY = 'library_logged_in';

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.loggedIn = localStorage.getItem(this.STORAGE_KEY) === 'true';
    }
  }

  login() {
    this.loggedIn = true;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, 'true');
    }
  }

  logout() {
    this.loggedIn = false;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
