import { Component, HostBinding } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'layout-1-flex-example', // tslint:disable-line
  templateUrl: './layout-1-flex-example.component.html'
})
export class Layout1FlexExampleComponent {
  @HostBinding('class') private hostClasses = 'd-flex flex-grow-1 align-items-stretch';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Layout 1 (Flex) - Layouts';
  }
}
