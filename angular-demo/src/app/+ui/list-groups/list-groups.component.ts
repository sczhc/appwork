import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-list-groups', // tslint:disable-line
  templateUrl: './list-groups.component.html'
})
export class ListGroupsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'List groups - UI elements';
  }
}
