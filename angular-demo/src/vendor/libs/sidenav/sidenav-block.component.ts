import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sidenav-block', // tslint:disable-line
  template: `
  <ng-content></ng-content>
  `
})
export class SidenavBlockComponent {
  @HostBinding('class.sidenav-block') private hostClassMain = true;
  @HostBinding('class.d-block') private hostClassBlock = true;
}
