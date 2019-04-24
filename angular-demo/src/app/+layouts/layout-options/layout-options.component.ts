import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'layout-options', // tslint:disable-line
  templateUrl: './layout-options.component.html'
})
export class LayoutOptionsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Layout options - Layouts';
  }
}
