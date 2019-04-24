import { Component, ViewEncapsulation } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AppService } from '../../app.service';

@Component({
  selector: 'miscellaneous-ng-block-ui', // tslint:disable-line
  templateUrl: './ng-block-ui.component.html',
  styleUrls: [
    '../../../vendor/libs/spinkit/spinkit.scss',
    './ng-block-ui.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgBlockUiComponent {
  @BlockUI() blockUIPage: NgBlockUI;
  @BlockUI('element') blockUIElement: NgBlockUI;

  elementBlocked = false;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ng Block UI - Miscellaneous';
  }

  blockPage() {
    this.blockUIPage.start();

    setTimeout(() => {
      this.blockUIPage.stop();
    }, 5000);
  }

  toggleElementBlocking() {
    this.elementBlocked = !this.elementBlocked;

    if (this.elementBlocked) {
      this.blockUIElement.start();
    } else {
      this.blockUIElement.stop();
    }
  }
}
