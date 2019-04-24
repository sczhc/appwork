import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-navbar', // tslint:disable-line
  templateUrl: './cui-navbar.component.html',
})
export class CuiNavbarComponent {
  isRTL: boolean;

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }

  isExpanded1 = false;
  isExpanded2 = false;
  isExpanded3 = false;
  isExpanded4 = false;
  isExpanded5 = false;
  isExpanded6 = false;
  isExpanded7 = false;
  isExpanded8 = false;
  isExpanded9 = false;
  isExpanded10 = false;
  isExpanded11 = false;
  isExpanded12 = false;
  isExpanded13 = false;
  isExpanded14 = false;
  isExpanded15 = false;
  isExpanded16 = false;
  isExpanded17 = false;
  isExpanded18 = false;
  isExpanded19 = false;
  isExpanded20 = false;
  isExpanded21 = false;

  searchExpanded = false;
}
