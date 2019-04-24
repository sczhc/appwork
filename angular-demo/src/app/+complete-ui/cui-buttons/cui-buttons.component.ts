import { Component } from '@angular/core';

@Component({
  selector: 'cui-buttons', // tslint:disable-line
  templateUrl: './cui-buttons.component.html'
})
export class CuiButtonsComponent {
  checkboxButtonsModel = {
    left: true,
    middle: false,
    right: false
  };

  radioButtonsModel = 1;
}
