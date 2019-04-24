import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-thumbnails', // tslint:disable-line
  templateUrl: './thumbnails.component.html'
})
export class ThumbnailsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Thumbnails - UI elements';
  }
}
