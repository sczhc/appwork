import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'layout-2-example', // tslint:disable-line
  templateUrl: './layout-2-example.component.html'
})
export class Layout2ExampleComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Layout 2 - Layouts';
  }
}
