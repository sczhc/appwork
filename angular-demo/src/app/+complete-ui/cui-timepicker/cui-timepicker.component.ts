import { Component } from '@angular/core';

@Component({
  selector: 'cui-timepicker', // tslint:disable-line
  templateUrl: './cui-timepicker.component.html',
  styleUrls: ['../../../vendor/libs/ngb-timepicker/ngb-timepicker.scss']
})
export class CuiTimepickerComponent {
  time = {hour: 13, minute: 30, second: 30};
}
