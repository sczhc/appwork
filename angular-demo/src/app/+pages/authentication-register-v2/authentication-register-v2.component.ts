import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-register-v2',
  templateUrl: './authentication-register-v2.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationRegisterV2Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Register v2 - Pages';
  }

  credentials = {
    name: '',
    email: '',
    password: ''
  };

}
