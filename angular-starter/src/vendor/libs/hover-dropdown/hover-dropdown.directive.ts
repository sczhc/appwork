import { Directive, ElementRef, Host, Self, Optional, OnDestroy, AfterViewInit, NgZone, EventEmitter } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

const TIMEOUT = 150;

@Directive({
  selector: '[hoverDropdown]' // tslint:disable-line
})
export class HoverDropdownDirective implements OnDestroy, AfterViewInit {
  private timeout;
  private toggle;
  private menu;
  private hovered = false;
  private subscription: EventEmitter<{}>;
  private listeners: any = {};

  constructor(private el: ElementRef, private zone: NgZone, @Host() @Self() @Optional() private dropdown: NgbDropdown) {}

  ngAfterViewInit() {
    if (!this.dropdown) { return; }

    this.subscription = this.dropdown.openChange.subscribe(opened => {
      // Prevent dropdown close
      if (this.hovered) { this.dropdown.open(); }
    });

    this.toggle = this.el.nativeElement.querySelector('.dropdown-toggle');
    this.menu = this.el.nativeElement.querySelector('.dropdown-menu');

    if (!this.toggle || !this.menu) { return this.ngOnDestroy(); }

    this.listeners = {
      toggleMouseenter: () => this.zone.run(() => {
        this.hovered = true;
        this.open();
      }),
      toggleMouseleave: () => this.zone.run(() => {
        this.hovered = false;
        this.close();
      }),
      menuMouseenter: () => this.zone.run(() => this.open()),
      menuMouseleave: () => this.zone.run(() => this.close())
    };

    this.zone.runOutsideAngular(() => {
      this.toggle.addEventListener('mouseenter', this.listeners.toggleMouseenter);
      this.toggle.addEventListener('mouseleave', this.listeners.toggleMouseleave);
      this.menu.addEventListener('mouseenter', this.listeners.menuMouseenter);
      this.menu.addEventListener('mouseleave', this.listeners.menuMouseleave);
    });
  }

  ngOnDestroy() {
    this.clearCloseTimeout();

    this.zone.runOutsideAngular(() => {
      this.toggle.removeEventListener('mouseenter', this.listeners.toggleMouseenter);
      this.toggle.removeEventListener('mouseleave', this.listeners.toggleMouseleave);
      this.menu.removeEventListener('mouseenter', this.listeners.menuMouseenter);
      this.menu.removeEventListener('mouseleave', this.listeners.menuMouseleave);
    });

    this.dropdown = null;
    this.toggle = null;
    this.menu = null;
    this.listeners = null;
    this.el = null;
    this.subscription.unsubscribe();
    this.subscription = null;
  }

  private open() {
    this.clearCloseTimeout();
    if (this.isStatic()) { return; }
    this.dropdown.open();
  }

  private close() {
    this.clearCloseTimeout();
    if (this.isStatic()) { return; }

    this.timeout = setTimeout(() => {
      this.clearCloseTimeout();
      this.dropdown.close();
    }, TIMEOUT);
  }

  private isStatic() {
    return window.getComputedStyle(this.menu, null).getPropertyValue('position') === 'static';
  }

  private clearCloseTimeout() {
    if (!this.timeout) { return; }
    clearTimeout(this.timeout);
    this.timeout = null;
  }
}
