import { Component } from '@angular/core';

@Component({
  selector: 'cui-rating', // tslint:disable-line
  templateUrl: './cui-rating.component.html'
})
export class CuiRatingComponent {
  currentRate = 5;
  hoveredRate = 0;
  readonly = false;
}
