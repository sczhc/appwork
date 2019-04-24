import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-login-v3',
  templateUrl: './authentication-login-v3.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationLoginV3Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Login v3 - Pages';
  }

  credentials = {
    email: '',
    password: '',
    rememberMe: false
  };

}
