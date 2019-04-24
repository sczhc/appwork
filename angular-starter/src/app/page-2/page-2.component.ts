import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html'
})
export class Page2Component {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Page 2';
  }

}
