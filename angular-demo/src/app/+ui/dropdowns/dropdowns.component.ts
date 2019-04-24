import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-dropdowns', // tslint:disable-line
  templateUrl: './dropdowns.component.html',
  styleUrls: ['../../../vendor/libs/ngx-contextmenu/ngx-contextmenu.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownsComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Dropdowns - UI elements';
    this.isRTL = appService.isRTL;
  }
}
