import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-footer', // tslint:disable-line
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Footer - UI elements';
  }
}
