import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-tooltips-and-popovers', // tslint:disable-line
  templateUrl: './cui-tooltips-and-popovers.component.html',
})
export class CuiTooltipsAndPopoversComponent {
  isRTL: boolean;

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }
}
