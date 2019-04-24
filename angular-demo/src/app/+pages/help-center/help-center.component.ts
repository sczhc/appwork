import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html'
})
export class HelpCenterComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Help center - Pages';
  }
}
