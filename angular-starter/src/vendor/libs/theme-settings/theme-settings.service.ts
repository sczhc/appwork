import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class ThemeSettingsService {
  constructor(private zone: NgZone) {}

  private get themeSettings() {
    return window['themeSettings'];
  }

  private exec(fn) {
    return this.themeSettings && this.zone.runOutsideAngular(fn);
  }

  get options(): ThemeSettingsOptions {
    return (this.themeSettings && this.themeSettings.settings) || {};
  }

  getOption(name: string) {
    return this.options[name] || null;
  }

  setRtl(rtl: boolean) {
    this.exec(() => this.themeSettings.setRtl(rtl));
  }

  setMaterial(rtl: boolean) {
    this.exec(() => this.themeSettings.setMaterial(rtl));
  }

  setTheme(themeName: string, updateStorage = true, cb: () => any = null) {
    this.exec(() => this.themeSettings.setTheme(themeName, updateStorage, cb));
  }

  setLayoutPosition(pos: 'static' | 'static-offcanvas' | 'fixed' | 'fixed-offcanvas', updateStorage = true) {
    this.exec(() => this.themeSettings.setLayoutPosition(pos, updateStorage));
  }

  setLayoutNavbarFixed(fixed: boolean, updateStorage = true) {
    this.exec(() => this.themeSettings.setLayoutNavbarFixed(fixed, updateStorage));
  }

  setLayoutFooterFixed(fixed: boolean, updateStorage = true) {
    this.exec(() => this.themeSettings.setLayoutFooterFixed(fixed, updateStorage));
  }

  setLayoutReversed(reversed: boolean, updateStorage = true) {
    this.exec(() => this.themeSettings.setLayoutReversed(reversed, updateStorage));
  }

  setNavbarBg(bg: string, updateStorage = true) {
    this.exec(() => this.themeSettings.setNavbarBg(bg, updateStorage));
  }

  setSidenavBg(bg: string, updateStorage = true) {
    this.exec(() => this.themeSettings.setSidenavBg(bg, updateStorage));
  }

  setFooterBg(bg: string, updateStorage = true) {
    this.exec(() => this.themeSettings.setFooterBg(bg, updateStorage));
  }

  update() {
    this.exec(() => this.themeSettings.update());
  }

  updateNavbarBg() {
    this.exec(() => this.themeSettings.updateNavbarBg());
  }

  updateSidenavBg() {
    this.exec(() => this.themeSettings.updateSidenavBg());
  }

  updateFooterBg() {
    this.exec(() => this.themeSettings.updateFooterBg());
  }

  clearLocalStorage() {
    this.exec(() => this.themeSettings.clearLocalStorage());
  }

  destroy() {
    this.exec(() => this.themeSettings.destroy());
  }
}

export interface ThemeSettingsTheme {
  name: string;
  title: string;
  colors: {
    primary: string;
    navbar: string;
    sidenav: string;
  };
}

export interface ThemeSettingsOptions {
  cssPath: string;
  themesPath: string;
  cssFilenamePattern: string;
  navbarBgs: string[];
  defaultNavbarBg: string;
  sidenavBgs: string[];
  defaultSidenavBg: string;
  footerBgs: string[];
  defaultFooterBg: string;
  availableThemes: ThemeSettingsTheme[];
  defaultTheme: ThemeSettingsTheme;
  theme: ThemeSettingsTheme;
  controls: string[];
  rtl: boolean;
  material: boolean;
  layoutPosition: 'static' | 'static-offcanvas' | 'fixed' | 'fixed-offcanvas';
  layoutReversed: boolean;
  layoutNavbarFixed: boolean;
  layoutFooterFixed: boolean;
  navbarBg: string;
  sidenavBg: string;
  footerBg: string;
  pathResolver: (url: string) => string;
}
