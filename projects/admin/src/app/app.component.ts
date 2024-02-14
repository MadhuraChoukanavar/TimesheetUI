import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin';
  isLoggedIn: boolean = false; 
  constructor(private router: Router) {
    // Check if the current route is the login page
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = event.url !== '/login';
      }
    });
  }
}
