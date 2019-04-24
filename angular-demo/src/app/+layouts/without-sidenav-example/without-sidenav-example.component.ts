import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'without-sidenav-example', // tslint:disable-line
  templateUrl: './without-sidenav-example.component.html'
})
export class WithoutSidenavExampleComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Without sidenav - Layouts';
  }
}
