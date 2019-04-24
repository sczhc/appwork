import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-login-v2',
  templateUrl: './authentication-login-v2.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationLoginV2Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Login v2 - Pages';
  }

  credentials = {
    email: '',
    password: '',
    rememberMe: false
  };

}
