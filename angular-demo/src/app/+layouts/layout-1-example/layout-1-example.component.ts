import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'layout-1-example', // tslint:disable-line
  templateUrl: './layout-1-example.component.html'
})
export class Layout1ExampleComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Layout 1 - Layouts';
  }
}
