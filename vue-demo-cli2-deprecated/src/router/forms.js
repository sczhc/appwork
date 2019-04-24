import Layout2 from '@/layout/Layout2'

export default [{
  path: '/forms',
  component: Layout2,
  children: [{
    path: 'layouts-and-elements',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/LayoutsAndElements')
  }, {
    path: 'controls',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/Controls')
  }, {
    path: 'custom-controls',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/CustomControls')
  }, {
    path: 'input-groups',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/InputGroups')
  }, {
    path: 'switchers',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/Switchers')
  }, {
    path: 'input-spinner',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/InputSpinner')
  }, {
    path: 'sliders',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/Sliders')
  }, {
    path: 'selects-and-tags',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/SelectsAndTags')
  }, {
    path: 'pickers',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/Pickers')
  }, {
    path: 'editors',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/Editors')
  }, {
    path: 'file-upload',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/FileUpload')
  }, {
    path: 'vue-form-wizard',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/VueFormWizard')
  }, {
    path: 'vue-typeahead',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/VueTypeahead')
  }, {
    path: 'extras',
    component: () => /* webpackChunkName: "view-[request]" */ import('@/components/forms/Extras')
  }]
}]
