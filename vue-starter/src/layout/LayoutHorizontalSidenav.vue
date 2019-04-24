<template>
  <div class="layout-wrapper layout-1 layout-without-sidenav">
    <div class="layout-inner">
      <app-layout-navbar :sidenavToggle="false" />

      <div class="layout-container">
        <div class="layout-content">
          <app-layout-sidenav orientation="horizontal" />

          <div class="router-transitions container-fluid flex-grow-1 container-p-y">
            <router-view />
          </div>

          <app-layout-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNavbar from './LayoutNavbar'
import LayoutSidenav from './LayoutSidenav'
import LayoutFooter from './LayoutFooter'

export default {
  name: 'app-layout-horizontal-sidenav',
  components: {
    'app-layout-navbar': LayoutNavbar,
    'app-layout-sidenav': LayoutSidenav,
    'app-layout-footer': LayoutFooter
  },

  mounted () {
    // Enshure that we have not '.layout-expanded' class on the html element
    this.layoutHelpers._removeClass('layout-expanded')

    this.layoutHelpers.init()
    this.layoutHelpers.update()
    this.layoutHelpers.setAutoUpdate(true)
  },

  beforeDestroy () {
    this.layoutHelpers.destroy()
  }
}
</script>
