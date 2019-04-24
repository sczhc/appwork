import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-login-and-register',
  templateUrl: './authentication-login-and-register.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationLoginAndRegisterComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Login + Register - Pages';
  }

  loginCredentials = {
    email: '',
    password: '',
    rememberMe: false
  };

  registerCredentials = {
    name: '',
    email: '',
    password: ''
  };

}
