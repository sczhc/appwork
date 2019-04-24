import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-profile-v1',
  templateUrl: './profile-v1.component.html'
})
export class ProfileV1Component {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Profile v1 - Pages';
  }
}
