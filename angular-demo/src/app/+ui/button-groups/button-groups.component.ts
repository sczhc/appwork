import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-button-groups', // tslint:disable-line
  templateUrl: './button-groups.component.html'
})
export class ButtonGroupsComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Button groups - UI elements';
    this.isRTL = appService.isRTL;
  }
}
