import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-input-groups', // tslint:disable-line
  templateUrl: './cui-input-groups.component.html',
})
export class CuiInputGroupsComponent {
  isRTL: boolean;

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }
}
