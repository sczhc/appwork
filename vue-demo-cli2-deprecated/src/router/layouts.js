import Layout1 from '@/layout/Layout1'
import Layout1Flex from '@/layout/Layout1Flex'
import Layout2 from '@/layout/Layout2'
import Layout2Flex from '@/layout/Layout2Flex'
import LayoutHorizontalSidenav from '@/layout/LayoutHorizontalSidenav'
import LayoutWithoutSidenav from '@/layout/LayoutWithoutSidenav'
import LayoutWithoutNavbar from '@/layout/LayoutWithoutNavbar'
import LayoutWithoutNavbarFlex from '@/layout/LayoutWithoutNavbarFlex'
import LayoutBlank from '@/layout/LayoutBlank'

export default [{
  path: '/layouts',
  component: Layout2,
  children: [{
    path: 'options',
    component: () => import('@/components/layouts/LayoutOptions')
  }, {
    path: 'helpers',
    component: () => import('@/components/layouts/LayoutHelpers')
  }, {
    path: 'layout-2',
    component: () => import('@/components/layouts/Layout2Example')
  }]
}, {
  path: '/layouts/layout-2-flex',
  component: Layout2Flex,
  children: [{
    path: '',
    component: () => import('@/components/layouts/Layout2FlexExample')
  }]
}, {
  path: '/layouts/layout-1',
  component: Layout1,
  children: [{
    path: '',
    component: () => import('@/components/layouts/Layout1Example')
  }]
}, {
  path: '/layouts/layout-1-flex',
  component: Layout1Flex,
  children: [{
    path: '',
    component: () => import('@/components/layouts/Layout1FlexExample')
  }]
}, {
  path: '/layouts/without-navbar',
  component: LayoutWithoutNavbar,
  children: [{
    path: '',
    component: () => import('@/components/layouts/WithoutNavbarExample')
  }]
}, {
  path: '/layouts/without-navbar-flex',
  component: LayoutWithoutNavbarFlex,
  children: [{
    path: '',
    component: () => import('@/components/layouts/WithoutNavbarFlexExample')
  }]
}, {
  path: '/layouts/without-sidenav',
  component: LayoutWithoutSidenav,
  children: [{
    path: '',
    component: () => import('@/components/layouts/WithoutSidenavExample')
  }]
}, {
  path: '/layouts/horizontal-sidenav',
  component: LayoutHorizontalSidenav,
  children: [{
    path: '',
    component: () => import('@/components/layouts/HorizontalSidenavExample')
  }]
}, {
  path: '/layouts/blank',
  component: LayoutBlank,
  children: [{
    path: '',
    component: () => import('@/components/layouts/BlankExample')
  }]
}]
