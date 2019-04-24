import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'charts-angular-google-maps', // tslint:disable-line
  templateUrl: './angular-google-maps.component.html',
  styles: [`
    :host /deep/ agm-map {
      height: 400px;
      width: 100%;
    }
  `]
})
export class AngularGoogleMapsComponent {
  lat = -12.043333;
  lng = -77.028333;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Angular Google Maps - Charts';
  }
}
