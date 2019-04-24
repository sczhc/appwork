import Layout2 from '@/layout/Layout2'

export default [{
  path: '/dashboards',
  component: Layout2,
  children: [{
    path: 'dashboard-1',
    component: () => import('@/components/dashboards/Dashboard1')
  }, {
    path: 'dashboard-2',
    component: () => import('@/components/dashboards/Dashboard2')
  }, {
    path: 'dashboard-3',
    component: () => import('@/components/dashboards/Dashboard3')
  }, {
    path: 'dashboard-4',
    component: () => import('@/components/dashboards/Dashboard4')
  }, {
    path: 'dashboard-5',
    component: () => import('@/components/dashboards/Dashboard5')
  }]
}]
