import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  showDashboard: boolean = false;

  // handleLogin() {
  //   // Perform login logic, and if successful, set showDashboard to true
  //   this.showDashboard = true;
  // }
}
