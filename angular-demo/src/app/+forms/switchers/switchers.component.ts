import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'forms-switchers', // tslint:disable-line
  templateUrl: './switchers.component.html'
})
export class SwitchersComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Switchers - Forms';
  }
}
