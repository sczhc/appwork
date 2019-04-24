import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'horizontal-sidenav-example', // tslint:disable-line
  templateUrl: './horizontal-sidenav-example.component.html'
})
export class HorizontalSidenavExampleComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Horizontal sidenav - Layouts';
  }
}
