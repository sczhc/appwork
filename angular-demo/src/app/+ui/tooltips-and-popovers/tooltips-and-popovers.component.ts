import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-tooltips-and-popovers', // tslint:disable-line
  templateUrl: './tooltips-and-popovers.component.html',
  styles: [`
    :host /deep/ .confirm-btn-container {
      flex-basis: auto !important;
    }
  `]
})
export class TooltipsAndPopoversComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Tooltips and popovers - UI elements';
    this.isRTL = appService.isRTL;
  }

  //
  // angular-confirmation-popover
  //

  confirm() {
    console.log('Confirmed');
  }

  cancel() {
    console.log('Cancelled');
  }
}
