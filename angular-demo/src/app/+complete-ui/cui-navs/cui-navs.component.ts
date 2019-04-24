import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-navs', // tslint:disable-line
  templateUrl: './cui-navs.component.html',
})
export class CuiNavsComponent {
  isRTL: boolean;

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }
}
