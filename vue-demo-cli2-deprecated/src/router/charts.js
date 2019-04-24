import Layout2 from '@/layout/Layout2'

export default [{
  path: '/charts',
  component: Layout2,
  children: [{
    path: 'vue2-google-maps',
    component: () => import('@/components/charts/Vue2GoogleMaps')
  }, {
    path: 'vue-c3',
    component: () => import('@/components/charts/VueC3')
  }, {
    path: 'vue-echarts',
    component: () => import('@/components/charts/VueEcharts')
  }, {
    path: 'vue-chartjs',
    component: () => import('@/components/charts/VueChartjs')
  }, {
    path: 'vue-trend',
    component: () => import('@/components/charts/VueTrend')
  }]
}]
