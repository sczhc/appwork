import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-navs', // tslint:disable-line
  templateUrl: './navs.component.html'
})
export class NavsComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Navs - UI elements';
    this.isRTL = appService.isRTL;
  }
}
