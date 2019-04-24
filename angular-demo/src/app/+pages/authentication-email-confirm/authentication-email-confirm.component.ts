import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-email-confirm',
  templateUrl: './authentication-email-confirm.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationEmailConfirmComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Email confirm - Pages';
  }

}
