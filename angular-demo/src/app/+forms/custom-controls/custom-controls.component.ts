import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'forms-custom-controls', // tslint:disable-line
  templateUrl: './custom-controls.component.html'
})
export class CustomControlsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Custom controls - Forms';
  }
}
