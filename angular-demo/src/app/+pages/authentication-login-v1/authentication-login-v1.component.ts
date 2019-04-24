import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-login-v1',
  templateUrl: './authentication-login-v1.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationLoginV1Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Login v1 - Pages';
  }

  credentials = {
    email: '',
    password: '',
    rememberMe: false
  };

}
