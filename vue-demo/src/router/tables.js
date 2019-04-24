import Layout2 from '@/layout/Layout2'

export default [{
  path: '/tables',
  component: Layout2,
  children: [{
    path: 'bootstrap',
    component: () => import('@/components/tables/Bootstrap')
  }, {
    path: 'vue-tables-2',
    component: () => import('@/components/tables/VueTables2')
  }]
}]
