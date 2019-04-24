import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-app-brand', // tslint:disable-line
  templateUrl: './app-brand.component.html'
})
export class AppBrandComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'App brand - UI elements';
  }

  isNavbarExpanded = false;
  isSidenavCollapsed = false;
}
