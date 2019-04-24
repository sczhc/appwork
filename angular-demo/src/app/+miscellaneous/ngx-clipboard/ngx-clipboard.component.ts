import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'miscellaneous-ngx-clipboard', // tslint:disable-line
  templateUrl: './ngx-clipboard.component.html'
})
export class NgxClipboardComponent {
  copied = false;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ngx Clipboard - Miscellaneous';
  }

  onCopy() {
    this.copied = true;
    setTimeout(() => this.copied = false, 1000);
  }
}
