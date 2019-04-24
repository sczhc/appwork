import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-lock-screen-v1',
  templateUrl: './authentication-lock-screen-v1.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationLockScreenV1Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Lock screen v1 - Pages';
  }

  user = {
    avatar: '1.png',
    name: 'Mike Greene'
  };

  credentials = {
    password: ''
  };

}
