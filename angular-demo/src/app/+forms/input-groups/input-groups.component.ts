import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'forms-input-groups', // tslint:disable-line
  templateUrl: './input-groups.component.html'
})
export class InputGroupsComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Input groups - Forms';
    this.isRTL = appService.isRTL;
  }
}
