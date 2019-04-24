import Layout2 from '@/layout/Layout2'

export default [{
  path: '/typography',
  component: Layout2,
  children: [{
    path: '',
    component: () => import('@/components/Typography')
  }]
}]
