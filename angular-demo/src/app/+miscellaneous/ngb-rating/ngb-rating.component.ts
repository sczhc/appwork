import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'miscellaneous-ngb-rating', // tslint:disable-line
  templateUrl: './ngb-rating.component.html'
})
export class NgbRatingComponent {
  currentRate = 5;
  hoveredRate = 0;
  readonly = false;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ngb Rating - Miscellaneous';
  }
}
