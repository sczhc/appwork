import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class LayoutService {
  constructor(private zone: NgZone) {}

  private get layoutHelpers() {
    return window['layoutHelpers'];
  }

  private exec(fn) {
    return this.layoutHelpers && this.zone.runOutsideAngular(fn);
  }

  public getLayoutSidenav() {
    return this.exec(() => this.layoutHelpers.getLayoutSidenav()) || null;
  }

  public getSidenav() {
    return this.exec(() => this.layoutHelpers.getSidenav()) || null;
  }

  public getLayoutNavbar() {
    return this.exec(() => this.layoutHelpers.getLayoutNavbar()) || null;
  }

  public getLayoutFooter() {
    return this.exec(() => this.layoutHelpers.getLayoutFooter()) || null;
  }

  public getLayoutContainer() {
    return this.exec(() => this.layoutHelpers.getLayoutContainer()) || null;
  }

  public isSmallScreen() {
    return this.exec(() => this.layoutHelpers.isSmallScreen());
  }

  public isLayout1() {
    return this.exec(() => this.layoutHelpers.isLayout1());
  }

  public isCollapsed() {
    return this.exec(() => this.layoutHelpers.isCollapsed());
  }

  public isFixed() {
    return this.exec(() => this.layoutHelpers.isFixed());
  }

  public isOffcanvas() {
    return this.exec(() => this.layoutHelpers.isOffcanvas());
  }

  public isNavbarFixed() {
    return this.exec(() => this.layoutHelpers.isNavbarFixed());
  }

  public isFooterFixed() {
    return this.exec(() => this.layoutHelpers.isFooterFixed());
  }

  public isReversed() {
    return this.exec(() => this.layoutHelpers.isReversed());
  }

  public setCollapsed(collapsed, animate = true) {
    this.exec(() => this.layoutHelpers.setCollapsed(collapsed, animate));
  }

  public toggleCollapsed(animate = true) {
    this.exec(() => this.layoutHelpers.toggleCollapsed(animate));
  }

  public setPosition(fixed, offcanvas) {
    this.exec(() => this.layoutHelpers.setPosition(fixed, offcanvas));
  }

  public setNavbarFixed(fixed) {
    this.exec(() => this.layoutHelpers.setNavbarFixed(fixed));
  }

  public setFooterFixed(fixed) {
    this.exec(() => this.layoutHelpers.setFooterFixed(fixed));
  }

  public setReversed(reversed) {
    this.exec(() => this.layoutHelpers.setReversed(reversed));
  }

  public update() {
    this.exec(() => this.layoutHelpers.update());
  }

  public setAutoUpdate(enable) {
    this.exec(() => this.layoutHelpers.setAutoUpdate(enable));
  }

  public on(event, callback) {
    this.exec(() => this.layoutHelpers.on(event, callback));
  }

  public off(event) {
    this.exec(() => this.layoutHelpers.off(event));
  }

  public init() {
    this.exec(() => this.layoutHelpers.init());
  }

  public destroy() {
    this.exec(() => this.layoutHelpers.destroy());
  }

  // Internal
  //

  public _redrawLayoutSidenav() {
    this.exec(() => this.layoutHelpers._redrawLayoutSidenav());
  }

  public _removeClass(cls) {
    this.exec(() => this.layoutHelpers._removeClass(cls));
  }
}
