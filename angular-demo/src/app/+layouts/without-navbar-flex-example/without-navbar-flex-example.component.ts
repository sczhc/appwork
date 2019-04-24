import { Component, HostBinding } from '@angular/core';
import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'without-navbar-flex-example', // tslint:disable-line
  templateUrl: './without-navbar-flex-example.component.html'
})
export class WithoutNavbarFlexExampleComponent {
  @HostBinding('class') private hostClasses = 'd-flex flex-grow-1 align-items-stretch';

  constructor(private appService: AppService, private layoutService: LayoutService) {
    this.appService.pageTitle = 'Without navbar (Flex) - Layouts';
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }
}
