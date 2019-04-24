import Layout2 from '@/layout/Layout2'

export default [{
  path: '/miscellaneous',
  component: Layout2,
  children: [{
    path: 'vue-masonry',
    component: () => import('@/components/miscellaneous/VueMasonry')
  }, {
    path: 'spinkit',
    component: () => import('@/components/miscellaneous/SpinKit')
  }, {
    path: 'ladda',
    component: () => import('@/components/miscellaneous/Ladda')
  }, {
    path: 'numeraljs',
    component: () => import('@/components/miscellaneous/Numeraljs')
  }, {
    path: 'vue-blockui',
    component: () => import('@/components/miscellaneous/VueBlockui')
  }, {
    path: 'idle-vue',
    component: () => import('@/components/miscellaneous/IdleVue')
  }, {
    path: 'perfect-scrollbar',
    component: () => import('@/components/miscellaneous/PerfectScrollbar')
  }, {
    path: 'vue-clipboard2',
    component: () => import('@/components/miscellaneous/VueClipboard2')
  }]
}]
