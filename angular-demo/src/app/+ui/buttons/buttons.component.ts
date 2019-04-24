import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-buttons', // tslint:disable-line
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  checkboxButtonsModel = {
    left: true,
    middle: false,
    right: false
  };

  radioButtonsModel = 1;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Buttons - UI elements';
  }
}
