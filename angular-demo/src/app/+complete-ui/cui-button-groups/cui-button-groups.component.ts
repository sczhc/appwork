import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-button-groups', // tslint:disable-line
  templateUrl: './cui-button-groups.component.html',
})
export class CuiButtonGroupsComponent {
  isRTL: boolean;

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }
}
