import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-angular-confirmation-popover', // tslint:disable-line
  templateUrl: './cui-angular-confirmation-popover.component.html',
  styles: [`
    :host /deep/ .confirm-btn-container {
      flex-basis: auto !important;
    }
  `]
})
export class CuiAngularConfirmationPopoverComponent {
  isRTL: boolean;

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }

  confirm() {
    console.log('Confirmed');
  }

  cancel() {
    console.log('Cancelled');
  }
}
