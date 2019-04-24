import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-button-dropdowns', // tslint:disable-line
  templateUrl: './cui-button-dropdowns.component.html',
})
export class CuiButtonDropdownsComponent {
  isRTL: boolean;

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }
}
