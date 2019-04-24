import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'sidenav-link', // tslint:disable-line
  template: `
<a [href]="href" [target]="target" class="sidenav-link" [ngClass]="linkClass">
  <i class="sidenav-icon" *ngIf="icon" [ngClass]="icon"></i>
  <div><ng-content></ng-content></div>
  <div *ngIf="badge" class="ml-auto pl-1"><div class="badge" [ngClass]="badgeClass">{{badge}}</div></div>
</a>
  `
})
export class SidenavLinkComponent {
  @HostBinding('class.sidenav-item') private hostClassMain = true;
  @HostBinding('class.d-block') private hostClassBlock = true;

  @Input() href: string;
  @Input() icon: string;
  @Input() target = '_self';
  @Input() linkClass = '';
  @Input() badge: any = null;
  @Input() badgeClass = '';
  @Input() @HostBinding('class.disabled') disabled = false;
  @Input() @HostBinding('class.active') active = false;
}
