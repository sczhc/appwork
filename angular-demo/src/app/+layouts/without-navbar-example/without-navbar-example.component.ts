import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'without-navbar-example', // tslint:disable-line
  templateUrl: './without-navbar-example.component.html'
})
export class WithoutNavbarExampleComponent {
  constructor(private appService: AppService, private layoutService: LayoutService) {
    this.appService.pageTitle = 'Without navbar - Layouts';
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }
}
