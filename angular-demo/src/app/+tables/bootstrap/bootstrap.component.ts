import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'tables-bootstrap', // tslint:disable-line
  templateUrl: './bootstrap.component.html'
})
export class BootstrapComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Bootstrap - Tables';
  }
}
