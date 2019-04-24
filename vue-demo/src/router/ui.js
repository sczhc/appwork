import Layout2 from '@/layout/Layout2'

export default [{
  path: '/ui',
  component: Layout2,
  children: [{
    path: 'buttons',
    component: () => import('@/components/ui/Buttons')
  }, {
    path: 'badges',
    component: () => import('@/components/ui/Badges')
  }, {
    path: 'button-groups',
    component: () => import('@/components/ui/ButtonGroups')
  }, {
    path: 'dropdowns',
    component: () => import('@/components/ui/Dropdowns')
  }, {
    path: 'navs',
    component: () => import('@/components/ui/Navs')
  }, {
    path: 'pagination-and-breadcrumbs',
    component: () => import('@/components/ui/PaginationAndBreadcrumbs')
  }, {
    path: 'progress-bars',
    component: () => import('@/components/ui/ProgressBars')
  }, {
    path: 'list-groups',
    component: () => import('@/components/ui/ListGroups')
  }, {
    path: 'notifications',
    component: () => import('@/components/ui/Notifications')
  }, {
    path: 'modals',
    component: () => import('@/components/ui/Modals')
  }, {
    path: 'tooltips-and-popovers',
    component: () => import('@/components/ui/TooltipsAndPopovers')
  }, {
    path: 'thumbnails',
    component: () => import('@/components/ui/Thumbnails')
  }, {
    path: 'cards',
    component: () => import('@/components/ui/Cards')
  }, {
    path: 'accordion',
    component: () => import('@/components/ui/Accordion')
  }, {
    path: 'app-brand',
    component: () => import('@/components/ui/AppBrand')
  }, {
    path: 'navbar',
    component: () => import('@/components/ui/Navbar')
  }, {
    path: 'sidenav',
    component: () => import('@/components/ui/Sidenav')
  }, {
    path: 'footer',
    component: () => import('@/components/ui/Footer')
  }, {
    path: 'carousel',
    component: () => import('@/components/ui/Carousel')
  }, {
    path: 'lightbox',
    component: () => import('@/components/ui/Lightbox')
  }, {
    path: 'drag-and-drop',
    component: () => import('@/components/ui/DragAndDrop')
  }, {
    path: 'treeview',
    component: () => import('@/components/ui/Treeview')
  }, {
    path: 'plyr',
    component: () => import('@/components/ui/Plyr')
  }, {
    path: 'vue-cropper',
    component: () => import('@/components/ui/VueCropper')
  }, {
    path: 'vue-simple-calendar',
    component: () => import('@/components/ui/VueSimpleCalendar')
  }]
}]
