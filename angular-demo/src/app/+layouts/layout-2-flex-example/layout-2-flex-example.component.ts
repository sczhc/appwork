import { Component, HostBinding } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'layout-2-flex-example', // tslint:disable-line
  templateUrl: './layout-2-flex-example.component.html'
})
export class Layout2FlexExampleComponent {
  @HostBinding('class') private hostClasses = 'd-flex flex-grow-1 align-items-stretch';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Layout 2 (Flex) - Layouts';
  }
}
