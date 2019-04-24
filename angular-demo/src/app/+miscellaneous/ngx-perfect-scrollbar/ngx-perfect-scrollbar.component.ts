import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'miscellaneous-ngx-perfect-scrollbar', // tslint:disable-line
  templateUrl: './ngx-perfect-scrollbar.component.html',
  styleUrls: ['../../../vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss']
})
export class NgxPerfectScrollbarComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ngx Perfect Scrollbar - Miscellaneous';
  }
}
