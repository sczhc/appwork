import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-dropdowns', // tslint:disable-line
  templateUrl: './cui-dropdowns.component.html',
})
export class CuiDropdownsComponent {
  isRTL: boolean;

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }
}
