import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-register-v3',
  templateUrl: './authentication-register-v3.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationRegisterV3Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Register v3 - Pages';
  }

  credentials = {
    name: '',
    email: '',
    password: ''
  };

}
