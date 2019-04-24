<template>
  <sidenav :orientation="orientation" :class="curClasses">

    <!-- Brand demo (see src/demo.css) -->
    <div class="app-brand demo" v-if="orientation !== 'horizontal'">
      <span class="app-brand-logo demo bg-primary">
        <svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stop-opacity=".25" offset="0"></stop><stop stop-opacity=".1" offset=".3"></stop><stop stop-opacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlink:href="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlink:href="#a"></linearGradient></defs><path style="fill: #fff;" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
      </span>
      <router-link to="/" class="app-brand-text demo sidenav-text font-weight-normal ml-2">Appwork</router-link>
      <a href="javascript:void(0)" class="layout-sidenav-toggle sidenav-link text-large ml-auto" @click="toggleSidenav()">
        <i class="ion ion-md-menu align-middle"></i>
      </a>
    </div>
    <div class="sidenav-divider mt-0" v-if="orientation !== 'horizontal'"></div>

    <!-- Links -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">

      <!-- Dashboards -->
      <sidenav-menu icon="ion ion-md-speedometer" :active="isMenuActive('/dashboards')" :open="isMenuOpen('/dashboards')">
        <template slot="link-text">Dashboards</template>
        <sidenav-router-link to="/dashboards/dashboard-1" :exact="true">Dashboard 1</sidenav-router-link>
        <sidenav-router-link to="/dashboards/dashboard-2" :exact="true">Dashboard 2</sidenav-router-link>
        <sidenav-router-link to="/dashboards/dashboard-3" :exact="true">Dashboard 3</sidenav-router-link>
        <sidenav-router-link to="/dashboards/dashboard-4" :exact="true">Dashboard 4</sidenav-router-link>
        <sidenav-router-link to="/dashboards/dashboard-5" :exact="true">Dashboard 5</sidenav-router-link>
      </sidenav-menu>

      <!-- Layouts -->
      <sidenav-menu icon="ion ion-ios-albums" :active="isMenuActive('/layouts')" :open="isMenuOpen('/layouts')">
        <template slot="link-text">Layouts</template>
        <sidenav-router-link to="/layouts/options" :exact="true">Layout options</sidenav-router-link>
        <sidenav-router-link to="/layouts/helpers" :exact="true">Layout helpers</sidenav-router-link>
        <sidenav-router-link to="/layouts/layout-1" :exact="true">Layout 1</sidenav-router-link>
        <sidenav-router-link to="/layouts/layout-1-flex" :exact="true">Layout 1 (Flex)</sidenav-router-link>
        <sidenav-router-link to="/layouts/layout-2" :exact="true">Layout 2</sidenav-router-link>
        <sidenav-router-link to="/layouts/layout-2-flex" :exact="true">Layout 2 (Flex)</sidenav-router-link>
        <sidenav-router-link to="/layouts/without-navbar" :exact="true">Without navbar</sidenav-router-link>
        <sidenav-router-link to="/layouts/without-navbar-flex" :exact="true">Without navbar (Flex)</sidenav-router-link>
        <sidenav-router-link to="/layouts/without-sidenav" :exact="true">Without sidenav</sidenav-router-link>
        <sidenav-router-link to="/layouts/horizontal-sidenav" :exact="true">Horizontal sidenav</sidenav-router-link>
        <sidenav-router-link to="/layouts/blank" :exact="true">Blank</sidenav-router-link>
      </sidenav-menu>

      <sidenav-divider class="mb-1"/>
      <sidenav-header class="small font-weight-semibold">ELEMENTS</sidenav-header>

      <sidenav-router-link icon="ion ion-md-quote" to="/typography" :exact="true">Typography</sidenav-router-link>

      <!-- UI elements -->
      <sidenav-menu icon="ion ion-md-cube" :active="isMenuActive('/ui')" :open="isMenuOpen('/ui')">
        <template slot="link-text">User inteface</template>
        <sidenav-router-link to="/ui/buttons" :exact="true">Buttons</sidenav-router-link>
        <sidenav-router-link to="/ui/badges" :exact="true">Badges</sidenav-router-link>
        <sidenav-router-link to="/ui/button-groups" :exact="true">Button groups</sidenav-router-link>
        <sidenav-router-link to="/ui/dropdowns" :exact="true">Dropdowns</sidenav-router-link>
        <sidenav-router-link to="/ui/navs" :exact="true">Navs</sidenav-router-link>
        <sidenav-router-link to="/ui/pagination-and-breadcrumbs" :exact="true">Pagination and breadcrumbs</sidenav-router-link>
        <sidenav-router-link to="/ui/progress-bars" :exact="true">Progress bars</sidenav-router-link>
        <sidenav-router-link to="/ui/list-groups" :exact="true">List groups</sidenav-router-link>
        <sidenav-router-link to="/ui/notifications" :exact="true">Notifications</sidenav-router-link>
        <sidenav-router-link to="/ui/modals" :exact="true">Modals</sidenav-router-link>
        <sidenav-router-link to="/ui/tooltips-and-popovers" :exact="true">Tooltips and popovers</sidenav-router-link>
        <sidenav-router-link to="/ui/thumbnails" :exact="true">Thumbnails</sidenav-router-link>
        <sidenav-router-link to="/ui/cards" :exact="true">Cards</sidenav-router-link>
        <sidenav-router-link to="/ui/accordion" :exact="true">Accordion</sidenav-router-link>
        <sidenav-router-link to="/ui/app-brand" :exact="true">App brand</sidenav-router-link>
        <sidenav-router-link to="/ui/navbar" :exact="true">Navbar</sidenav-router-link>
        <sidenav-router-link to="/ui/sidenav" :exact="true">Sidenav</sidenav-router-link>
        <sidenav-router-link to="/ui/footer" :exact="true">Footer</sidenav-router-link>
        <sidenav-router-link to="/ui/carousel" :exact="true">Carousel</sidenav-router-link>
        <sidenav-router-link to="/ui/lightbox" :exact="true">Lightbox</sidenav-router-link>
        <sidenav-router-link to="/ui/drag-and-drop" :exact="true">Drag&amp;Drop</sidenav-router-link>
        <sidenav-router-link to="/ui/treeview" :exact="true">Treeview</sidenav-router-link>
        <sidenav-router-link to="/ui/plyr" :exact="true">Plyr</sidenav-router-link>
        <sidenav-router-link to="/ui/vue-cropper" :exact="true">Vue Cropper</sidenav-router-link>
        <sidenav-router-link to="/ui/vue-simple-calendar" :exact="true">Vue Simple Calendar</sidenav-router-link>
      </sidenav-menu>

      <!-- Forms -->
      <sidenav-menu icon="ion ion-md-switch" :active="isMenuActive('/forms')" :open="isMenuOpen('/forms')">
        <template slot="link-text">Forms</template>
        <sidenav-router-link to="/forms/layouts-and-elements" :exact="true">Layouts and elements</sidenav-router-link>
        <sidenav-router-link to="/forms/controls" :exact="true">Controls</sidenav-router-link>
        <sidenav-router-link to="/forms/custom-controls" :exact="true">Custom controls</sidenav-router-link>
        <sidenav-router-link to="/forms/input-groups" :exact="true">Input groups</sidenav-router-link>
        <sidenav-router-link to="/forms/switchers" :exact="true">Switchers</sidenav-router-link>
        <sidenav-router-link to="/forms/input-spinner" :exact="true">Input spinner</sidenav-router-link>
        <sidenav-router-link to="/forms/sliders" :exact="true">Sliders</sidenav-router-link>
        <sidenav-router-link to="/forms/selects-and-tags" :exact="true">Selects and tags</sidenav-router-link>
        <sidenav-router-link to="/forms/pickers" :exact="true">Pickers</sidenav-router-link>
        <sidenav-router-link to="/forms/editors" :exact="true">Editors</sidenav-router-link>
        <sidenav-router-link to="/forms/file-upload" :exact="true">File upload</sidenav-router-link>
        <sidenav-router-link to="/forms/vue-form-wizard" :exact="true">Vue Form Wizard</sidenav-router-link>
        <sidenav-router-link to="/forms/vue-typeahead" :exact="true">Vue Typeahead</sidenav-router-link>
        <sidenav-router-link to="/forms/extras" :exact="true">Extras</sidenav-router-link>
      </sidenav-menu>

      <!-- Tables -->
      <sidenav-menu icon="ion ion-md-grid" :active="isMenuActive('/tables')" :open="isMenuOpen('/tables')">
        <template slot="link-text">Tables</template>
        <sidenav-router-link to="/tables/bootstrap" :exact="true">Bootstrap</sidenav-router-link>
        <sidenav-router-link to="/tables/vue-tables-2" :exact="true">Vue Tables 2</sidenav-router-link>
      </sidenav-menu>

      <!-- Charts -->
      <sidenav-menu icon="ion ion-md-pie" :active="isMenuActive('/charts')" :open="isMenuOpen('/charts')">
        <template slot="link-text">Charts</template>
        <sidenav-router-link to="/charts/vue2-google-maps" :exact="true">Vue2 Google Maps</sidenav-router-link>
        <sidenav-router-link to="/charts/vue-c3" :exact="true">Vue C3</sidenav-router-link>
        <sidenav-router-link to="/charts/vue-echarts" :exact="true">Vue Echarts</sidenav-router-link>
        <sidenav-router-link to="/charts/vue-chartjs" :exact="true">Vue Chartjs</sidenav-router-link>
        <sidenav-router-link to="/charts/vue-trend" :exact="true">Vue Trend</sidenav-router-link>
      </sidenav-menu>

      <!-- Icons -->
      <sidenav-menu icon="ion ion-ios-heart" :active="isMenuActive('/icons')" :open="isMenuOpen('/icons')">
        <template slot="link-text">Icons</template>
        <sidenav-router-link to="/icons/font-awesome-5" :exact="true">Font Awesome 5</sidenav-router-link>
        <sidenav-router-link to="/icons/ionicons" :exact="true">Ionicons</sidenav-router-link>
        <sidenav-router-link to="/icons/linearicons" :exact="true">Linearicons</sidenav-router-link>
        <sidenav-router-link to="/icons/open-iconic" :exact="true">Open Iconic</sidenav-router-link>
        <sidenav-router-link to="/icons/stroke-icons-7" :exact="true">Stroke Icons 7</sidenav-router-link>
      </sidenav-menu>

      <!-- Miscellaneous -->
      <sidenav-menu icon="ion ion-ios-flask" :active="isMenuActive('/miscellaneous')" :open="isMenuOpen('/miscellaneous')">
        <template slot="link-text">Miscellaneous</template>
        <sidenav-router-link to="/miscellaneous/vue-masonry" :exact="true">Vue Masonry</sidenav-router-link>
        <sidenav-router-link to="/miscellaneous/spinkit" :exact="true">SpinKit</sidenav-router-link>
        <sidenav-router-link to="/miscellaneous/ladda" :exact="true">Ladda</sidenav-router-link>
        <sidenav-router-link to="/miscellaneous/numeraljs" :exact="true">Numeral.js</sidenav-router-link>
        <sidenav-router-link to="/miscellaneous/vue-blockui" :exact="true">Vue BlockUI</sidenav-router-link>
        <sidenav-router-link to="/miscellaneous/idle-vue" :exact="true">Idle Vue</sidenav-router-link>
        <sidenav-router-link to="/miscellaneous/perfect-scrollbar" :exact="true">Perfect Scrollbar</sidenav-router-link>
        <sidenav-router-link to="/miscellaneous/vue-clipboard2" :exact="true">Vue Clipboard2</sidenav-router-link>
      </sidenav-menu>

      <sidenav-divider class="mb-1"/>
      <sidenav-header class="small font-weight-semibold">EXTRAS</sidenav-header>

      <!-- Complete UI -->
      <sidenav-menu icon="ion ion-md-document" badge="59" badgeClass="badge-primary" :active="isMenuActive('/pages')" :open="isMenuOpen('/pages')">
        <template slot="link-text">Pages</template>

        <sidenav-menu :active="isMenuActive('/pages/articles')" :open="isMenuOpen('/pages/articles')">
          <template slot="link-text">Articles</template>
          <sidenav-router-link to="/pages/articles/list">List</sidenav-router-link>
          <sidenav-router-link to="/pages/articles/edit">Edit</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/authentication')" :open="isMenuOpen('/pages/authentication')">
          <template slot="link-text">Authentication</template>
          <sidenav-router-link to="/pages/authentication/login-v1">Login v1</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/register-v1">Register v1</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/login-v2">Login v2</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/register-v2">Register v2</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/login-v3">Login v3</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/register-v3">Register v3</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/login-and-register">Login + register</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/lock-screen-v1">Lock screen v1</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/lock-screen-v2">Lock screen v2</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/password-reset">Password reset</sidenav-router-link>
          <sidenav-router-link to="/pages/authentication/email-confirm">Email confirm</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/education')" :open="isMenuOpen('/pages/education')">
          <template slot="link-text">Education</template>
          <sidenav-router-link to="/pages/education/courses-v1">Courses v1</sidenav-router-link>
          <sidenav-router-link to="/pages/education/courses-v2">Courses v2</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/e-commerce')" :open="isMenuOpen('/pages/e-commerce')">
          <template slot="link-text">E-commerce</template>
          <sidenav-router-link to="/pages/e-commerce/product-list">Product list</sidenav-router-link>
          <sidenav-router-link to="/pages/e-commerce/product-item">Product item</sidenav-router-link>
          <sidenav-router-link to="/pages/e-commerce/product-edit">Product edit</sidenav-router-link>
          <sidenav-router-link to="/pages/e-commerce/order-list">Order list</sidenav-router-link>
          <sidenav-router-link to="/pages/e-commerce/order-detail">Order detail</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/forums')" :open="isMenuOpen('/pages/forums')">
          <template slot="link-text">Forums</template>
          <sidenav-router-link to="/pages/forums/list">List</sidenav-router-link>
          <sidenav-router-link to="/pages/forums/threads">Threads</sidenav-router-link>
          <sidenav-router-link to="/pages/forums/discussion">Discussion</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/messages-v1')" :open="isMenuOpen('/pages/messages-v1')">
          <template slot="link-text">Messages v1</template>
          <sidenav-router-link to="/pages/messages-v1/list">List</sidenav-router-link>
          <sidenav-router-link to="/pages/messages-v1/item">Item</sidenav-router-link>
          <sidenav-router-link to="/pages/messages-v1/compose">Compose</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/messages-v2')" :open="isMenuOpen('/pages/messages-v2')">
          <template slot="link-text">Messages v2</template>
          <sidenav-router-link to="/pages/messages-v2/list">List</sidenav-router-link>
          <sidenav-router-link to="/pages/messages-v2/item">Item</sidenav-router-link>
          <sidenav-router-link to="/pages/messages-v2/compose">Compose</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/messages-v3')" :open="isMenuOpen('/pages/messages-v3')">
          <template slot="link-text">Messages v3</template>
          <sidenav-router-link to="/pages/messages-v3/list">List</sidenav-router-link>
          <sidenav-router-link to="/pages/messages-v3/item">Item</sidenav-router-link>
          <sidenav-router-link to="/pages/messages-v3/compose">Compose</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/projects')" :open="isMenuOpen('/pages/projects')">
          <template slot="link-text">Projects</template>
          <sidenav-router-link to="/pages/projects/list">List</sidenav-router-link>
          <sidenav-router-link to="/pages/projects/item">Item</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/tickets')" :open="isMenuOpen('/pages/tickets')">
          <template slot="link-text">Tickets</template>
          <sidenav-router-link to="/pages/tickets/list">List</sidenav-router-link>
          <sidenav-router-link to="/pages/tickets/edit">Edit</sidenav-router-link>
        </sidenav-menu>

        <sidenav-menu :active="isMenuActive('/pages/users')" :open="isMenuOpen('/pages/users')">
          <template slot="link-text">Users</template>
          <sidenav-router-link to="/pages/users/list">List</sidenav-router-link>
          <sidenav-router-link to="/pages/users/view">View</sidenav-router-link>
          <sidenav-router-link to="/pages/users/edit">Edit</sidenav-router-link>
        </sidenav-menu>

        <sidenav-router-link to="/pages/account-settings" :exact="true">Account settings</sidenav-router-link>
        <sidenav-router-link to="/pages/chat" :exact="true">Chat</sidenav-router-link>
        <sidenav-router-link to="/pages/clients" :exact="true">Clients</sidenav-router-link>
        <sidenav-router-link to="/pages/contacts" :exact="true">Contacts</sidenav-router-link>
        <sidenav-router-link to="/pages/faq" :exact="true">FAQ</sidenav-router-link>
        <sidenav-router-link to="/pages/file-manager" :exact="true">File manager</sidenav-router-link>
        <sidenav-router-link to="/pages/gallery" :exact="true">Gallery</sidenav-router-link>
        <sidenav-router-link to="/pages/help-center" :exact="true">Help center</sidenav-router-link>
        <sidenav-router-link to="/pages/invoice" :exact="true">Invoice</sidenav-router-link>
        <sidenav-router-link to="/pages/kanban-board" :exact="true">Kanban board</sidenav-router-link>
        <sidenav-router-link to="/pages/pricing" :exact="true">Pricing</sidenav-router-link>
        <sidenav-router-link to="/pages/profile-v1" :exact="true">Profile v1</sidenav-router-link>
        <sidenav-router-link to="/pages/profile-v2" :exact="true">Profile v2</sidenav-router-link>
        <sidenav-router-link to="/pages/search-results" :exact="true">Search results</sidenav-router-link>
        <sidenav-router-link to="/pages/task-list" :exact="true">Task list</sidenav-router-link>
        <sidenav-router-link to="/pages/teams" :exact="true">Teams</sidenav-router-link>
        <sidenav-router-link to="/pages/vacancies" :exact="true">Vacancies</sidenav-router-link>
        <sidenav-router-link to="/pages/voting" :exact="true">Voting</sidenav-router-link>
      </sidenav-menu>

      <!-- Pages -->
      <sidenav-menu icon="ion ion-logo-buffer">
        <template slot="link-text">Complete UI</template>
        <sidenav-router-link to="/complete-ui">Base</sidenav-router-link>
        <sidenav-router-link to="/complete-ui/plugins">Plugins</sidenav-router-link>
        <sidenav-router-link to="/complete-ui/charts">Charts</sidenav-router-link>
      </sidenav-menu>

    </div>
  </sidenav>
</template>

<script>
import { Sidenav, SidenavLink, SidenavRouterLink, SidenavMenu, SidenavHeader, SidenavBlock, SidenavDivider } from '@/vendor/libs/sidenav'

export default {
  name: 'app-layout-sidenav',
  components: {
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider
  },

  props: {
    orientation: {
      type: String,
      default: 'vertical'
    }
  },

  computed: {
    curClasses () {
      let bg = this.layoutSidenavBg

      if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
        bg = bg
          .replace(' sidenav-dark', '')
          .replace(' sidenav-light', '')
          .replace('-darker', '')
          .replace('-dark', '')
      }

      return `bg-${bg} ` + (
        this.orientation !== 'horizontal'
          ? 'layout-sidenav'
          : 'layout-sidenav-horizontal container-p-x flex-grow-0'
      )
    }
  },

  methods: {
    isMenuActive (url) {
      return this.$route.path.indexOf(url) === 0
    },

    isMenuOpen (url) {
      return this.$route.path.indexOf(url) === 0 && this.orientation !== 'horizontal'
    },

    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
    }
  }
}
</script>
