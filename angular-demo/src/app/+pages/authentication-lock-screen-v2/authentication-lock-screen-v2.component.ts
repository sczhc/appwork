import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-authentication-lock-screen-v2',
  templateUrl: './authentication-lock-screen-v2.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/authentication.scss'
  ]
})
export class AuthenticationLockScreenV2Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Lock screen v2 - Pages';
  }

  user = {
    avatar: '1.png',
    name: 'Mike Greene'
  };

  credentials = {
    password: ''
  };

}
