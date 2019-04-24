import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'layout-helpers', // tslint:disable-line
  templateUrl: './layout-helpers.component.html'
})
export class LayoutHelpersComponent {
  constructor(private appService: AppService, private layoutService: LayoutService) {
    this.appService.pageTitle = 'Layout helpers - Layouts';
  }

  isSmallScreen() {
    alert(this.layoutService.isSmallScreen());
  }

  isLayout1() {
    alert(this.layoutService.isLayout1());
  }

  isCollapsed() {
    alert(this.layoutService.isCollapsed());
  }

  isFixed() {
    alert(this.layoutService.isFixed());
  }

  isOffcanvas() {
    alert(this.layoutService.isOffcanvas());
  }

  isNavbarFixed() {
    alert(this.layoutService.isNavbarFixed());
  }

  isFooterFixed() {
    alert(this.layoutService.isFooterFixed());
  }

  isReversed() {
    alert(this.layoutService.isReversed());
  }

  setCollapsed(collapsed, animate) {
    this.layoutService.setCollapsed(collapsed, animate);
  }

  toggleCollapsed(animate) {
    this.layoutService.toggleCollapsed(animate);
  }

  setPosition(fixed, offcanvas) {
    this.layoutService.setPosition(fixed, offcanvas);
  }

  setNavbarFixed(fixed) {
    this.layoutService.setNavbarFixed(fixed);
  }

  setFooterFixed(fixed) {
    this.layoutService.setFooterFixed(fixed);
  }

  setReversed(reversed) {
    this.layoutService.setReversed(reversed);
  }
}
