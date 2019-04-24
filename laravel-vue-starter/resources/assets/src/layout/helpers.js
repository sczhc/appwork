export default {
  get _layoutHelpers () {
    return window.layoutHelpers
  },

  _exec (fn) {
    return this._layoutHelpers && fn()
  },

  getLayoutSidenav () {
    return this._exec(() => this._layoutHelpers.getLayoutSidenav()) || null
  },

  getSidenav () {
    return this._exec(() => this._layoutHelpers.getSidenav()) || null
  },

  getLayoutNavbar () {
    return this._exec(() => this._layoutHelpers.getLayoutNavbar()) || null
  },

  getLayoutFooter () {
    return this._exec(() => this._layoutHelpers.getLayoutFooter()) || null
  },

  getLayoutContainer () {
    return this._exec(() => this._layoutHelpers.getLayoutContainer()) || null
  },

  isSmallScreen () {
    return this._exec(() => this._layoutHelpers.isSmallScreen())
  },

  isLayout1 () {
    return this._exec(() => this._layoutHelpers.isLayout1())
  },

  isCollapsed () {
    return this._exec(() => this._layoutHelpers.isCollapsed())
  },

  isFixed () {
    return this._exec(() => this._layoutHelpers.isFixed())
  },

  isOffcanvas () {
    return this._exec(() => this._layoutHelpers.isOffcanvas())
  },

  isNavbarFixed () {
    return this._exec(() => this._layoutHelpers.isNavbarFixed())
  },

  isFooterFixed () {
    return this._exec(() => this._layoutHelpers.isFooterFixed())
  },

  isReversed () {
    return this._exec(() => this._layoutHelpers.isReversed())
  },

  setCollapsed (collapsed, animate = true) {
    this._exec(() => this._layoutHelpers.setCollapsed(collapsed, animate))
  },

  toggleCollapsed (animate = true) {
    this._exec(() => this._layoutHelpers.toggleCollapsed(animate))
  },

  setPosition (fixed, offcanvas) {
    this._exec(() => this._layoutHelpers.setPosition(fixed, offcanvas))
  },

  setNavbarFixed (fixed) {
    this._exec(() => this._layoutHelpers.setNavbarFixed(fixed))
  },

  setFooterFixed (fixed) {
    this._exec(() => this._layoutHelpers.setFooterFixed(fixed))
  },

  setReversed (reversed) {
    this._exec(() => this._layoutHelpers.setReversed(reversed))
  },

  update () {
    this._exec(() => this._layoutHelpers.update())
  },

  setAutoUpdate (enable) {
    this._exec(() => this._layoutHelpers.setAutoUpdate(enable))
  },

  on (event, callback) {
    this._exec(() => this._layoutHelpers.on(event, callback))
  },

  off (event) {
    this._exec(() => this._layoutHelpers.off(event))
  },

  init () {
    this._exec(() => this._layoutHelpers.init())
  },

  destroy () {
    this._exec(() => this._layoutHelpers.destroy())
  },

  // Internal
  //

  _removeClass (cls) {
    this._exec(() => this._layoutHelpers._removeClass(cls))
  }
}
