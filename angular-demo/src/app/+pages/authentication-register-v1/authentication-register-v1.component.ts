import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-register-v1',
  templateUrl: './authentication-register-v1.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationRegisterV1Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Register v1 - Pages';
  }

  credentials = {
    name: '',
    email: '',
    password: ''
  };

}
