import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'charts-ngx-trend', // tslint:disable-line
  templateUrl: './ngx-trend.component.html'
})
export class NgxTrendComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ngx Trend - Charts';
  }
}
