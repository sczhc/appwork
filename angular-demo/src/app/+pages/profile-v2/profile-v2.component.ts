import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-profile-v2',
  templateUrl: './profile-v2.component.html'
})
export class ProfileV2Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Profile v2 - Pages';
  }
}
