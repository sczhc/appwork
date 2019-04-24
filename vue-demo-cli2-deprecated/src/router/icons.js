import Layout2 from '@/layout/Layout2'

export default [{
  path: '/icons',
  component: Layout2,
  children: [{
    path: 'font-awesome-5',
    component: () => import('@/components/icons/FontAwesome5')
  }, {
    path: 'ionicons',
    component: () => import('@/components/icons/Ionicons')
  }, {
    path: 'linearicons',
    component: () => import('@/components/icons/Linearicons')
  }, {
    path: 'open-iconic',
    component: () => import('@/components/icons/OpenIconic')
  }, {
    path: 'stroke-icons-7',
    component: () => import('@/components/icons/StrokeIcons7')
  }]
}]
