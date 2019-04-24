import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

import dashboardsRoutes from './dashboards'
import layoutsRoutes from './layouts'
import typographyRoutes from './typography'
import uiRoutes from './ui'
import formsRoutes from './forms'
import tablesRoutes from './tables'
import chartsRoutes from './charts'
import iconsRoutes from './icons'
import miscellaneousRoutes from './miscellaneous'
import pagesRoutes from './pages'
import completeUiRoutes from './complete-ui'

Vue.use(Router)
Vue.use(Meta)

const ROUTES = [
  // Default route
  { path: '', redirect: '/dashboards/dashboard-1' }
]
  .concat(dashboardsRoutes)
  .concat(layoutsRoutes)
  .concat(typographyRoutes)
  .concat(uiRoutes)
  .concat(formsRoutes)
  .concat(tablesRoutes)
  .concat(chartsRoutes)
  .concat(iconsRoutes)
  .concat(miscellaneousRoutes)
  .concat(pagesRoutes)
  .concat(completeUiRoutes)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: ROUTES
})

router.afterEach(() => {
  // Remove initial splash screen
  const splashScreen = document.querySelector('.app-splash-screen')
  if (splashScreen) {
    splashScreen.style.opacity = 0
    setTimeout(() => splashScreen && splashScreen.parentNode.removeChild(splashScreen), 300)
  }

  // On small screens collapse sidenav
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }

  // Scroll to top of the page
  globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
  // Set loading state
  document.body.classList.add('app-loading')

  // Add tiny timeout to finish page transition
  setTimeout(() => next(), 10)
})

export default router
