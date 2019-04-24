import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-progress-bars', // tslint:disable-line
  templateUrl: './progress-bars.component.html'
})
export class ProgressBarsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Progress bars - UI elements';
  }
}
