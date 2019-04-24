import LayoutBlank from '@/layout/LayoutBlank'

export default [{
  path: '/complete-ui',
  component: LayoutBlank,
  children: [{
    path: '',
    component: () => import('@/cui-components/Base')
  }, {
    path: 'plugins',
    component: () => import('@/cui-components/Plugins')
  }, {
    path: 'charts',
    component: () => import('@/cui-components/Charts')
  }]
}]
