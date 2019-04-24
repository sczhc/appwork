import { Component, ViewEncapsulation } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'cui-ng-block-ui', // tslint:disable-line
  templateUrl: './cui-ng-block-ui.component.html',
  styleUrls: [
    '../../../vendor/libs/spinkit/spinkit.scss',
    './cui-ng-block-ui.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CuiNgBlockUiComponent {
  @BlockUI() blockUIPage: NgBlockUI;
  @BlockUI('element') blockUIElement: NgBlockUI;

  elementBlocked = false;

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
