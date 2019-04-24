import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-pagination-and-breadcrumbs', // tslint:disable-line
  templateUrl: './pagination-and-breadcrumbs.component.html'
})
export class PaginationAndBreadcrumbsComponent {
  page = 4;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Pagination and breadcrumbs - UI elements';
  }
}
