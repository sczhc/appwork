import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { TourService } from 'ngx-tour-ng-bootstrap';

@Component({
  selector: 'ui-ngx-tour', // tslint:disable-line
  templateUrl: './ngx-tour.component.html'
})
export class NgxTourComponent {
  constructor(private appService: AppService, public tourService: TourService) {
    this.appService.pageTitle = 'Ngx Tour - UI elements';

    this.tourService.initialize([
      {
        anchorId: 'tour-1',
        title: 'Title of first step',
        content: 'Content of first step'
      },
      {
        anchorId: 'tour-2',
        title: 'Title of second step',
        content: 'Content of second step'
      },
      {
        anchorId: 'tour-3',
        title: 'Title of third step',
        content: 'Content of third step'
      },
      {
        anchorId: 'tour-4',
        title: 'Title of fourth step',
        content: 'Content of fourth step'
      },
      {
        anchorId: 'tour-5',
        title: 'Title of fifth step',
        content: 'Content of fifth step'
      }
    ]);
  }

  startTour() {
    this.tourService.start();
  }
}
