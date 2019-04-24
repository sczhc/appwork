import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sidenav-divider', // tslint:disable-line
  template: ''
})
export class SidenavDividerComponent {
  @HostBinding('class.sidenav-divider') private hostClassMain = true;
  @HostBinding('class.d-block') private hostClassBlock = true;
}
