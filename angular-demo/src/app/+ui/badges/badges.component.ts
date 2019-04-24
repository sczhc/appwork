import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-badges', // tslint:disable-line
  templateUrl: './badges.component.html'
})
export class BadgesComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Badges - UI elements';
  }
}
