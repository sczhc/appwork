import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-password-reset',
  templateUrl: './authentication-password-reset.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationPasswordResetComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Password reset - Pages';
  }

  credentials = {
    email: ''
  };

}
