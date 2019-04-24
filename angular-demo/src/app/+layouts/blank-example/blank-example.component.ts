import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'blank-example', // tslint:disable-line
  templateUrl: './blank-example.component.html'
})
export class BlankExampleComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Blank layout - Layouts';
  }
}
