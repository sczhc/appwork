import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'miscellaneous-spinkit', // tslint:disable-line
  templateUrl: './spinkit.component.html',
  styleUrls: ['../../../vendor/libs/spinkit/spinkit.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpinKitComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'SpinKit - Miscellaneous';
  }
}
