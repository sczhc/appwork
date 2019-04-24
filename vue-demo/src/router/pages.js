import Layout2 from '@/layout/Layout2'
import Layout2Flex from '@/layout/Layout2Flex'
import LayoutBlank from '@/layout/LayoutBlank'

export default [{
  // Layout 2
  path: '/pages',
  component: Layout2,
  children: [{
    path: 'articles/list',
    component: () => import('@/components/pages/ArticlesList')
  }, {
    path: 'articles/edit',
    component: () => import('@/components/pages/ArticlesEdit')
  }, {
    path: 'education/courses-v1',
    component: () => import('@/components/pages/EducationCoursesV1')
  }, {
    path: 'education/courses-v2',
    component: () => import('@/components/pages/EducationCoursesV2')
  }, {
    path: 'e-commerce/product-list',
    component: () => import('@/components/pages/ECommerceProductList')
  }, {
    path: 'e-commerce/product-item',
    component: () => import('@/components/pages/ECommerceProductItem')
  }, {
    path: 'e-commerce/product-edit',
    component: () => import('@/components/pages/ECommerceProductEdit')
  }, {
    path: 'e-commerce/order-list',
    component: () => import('@/components/pages/ECommerceOrderList')
  }, {
    path: 'e-commerce/order-detail',
    component: () => import('@/components/pages/ECommerceOrderDetail')
  }, {
    path: 'forums/list',
    component: () => import('@/components/pages/ForumsList')
  }, {
    path: 'forums/threads',
    component: () => import('@/components/pages/ForumsThreads')
  }, {
    path: 'forums/discussion',
    component: () => import('@/components/pages/ForumsDiscussion')
  }, {
    path: 'messages-v2/list',
    component: () => import('@/components/pages/MessagesV2List')
  }, {
    path: 'messages-v2/item',
    component: () => import('@/components/pages/MessagesV2Item')
  }, {
    path: 'messages-v2/compose',
    component: () => import('@/components/pages/MessagesV2Compose')
  }, {
    path: 'messages-v3/list',
    component: () => import('@/components/pages/MessagesV3List')
  }, {
    path: 'messages-v3/item',
    component: () => import('@/components/pages/MessagesV3Item')
  }, {
    path: 'messages-v3/compose',
    component: () => import('@/components/pages/MessagesV3Compose')
  }, {
    path: 'projects/list',
    component: () => import('@/components/pages/ProjectsList')
  }, {
    path: 'projects/item',
    component: () => import('@/components/pages/ProjectsItem')
  }, {
    path: 'tickets/list',
    component: () => import('@/components/pages/TicketsList')
  }, {
    path: 'tickets/edit',
    component: () => import('@/components/pages/TicketsEdit')
  }, {
    path: 'users/list',
    component: () => import('@/components/pages/UsersList')
  }, {
    path: 'users/view',
    component: () => import('@/components/pages/UsersView')
  }, {
    path: 'users/edit',
    component: () => import('@/components/pages/UsersEdit')
  }, {
    path: 'account-settings',
    component: () => import('@/components/pages/AccountSettings')
  }, {
    path: 'contacts',
    component: () => import('@/components/pages/Contacts')
  }, {
    path: 'faq',
    component: () => import('@/components/pages/Faq')
  }, {
    path: 'file-manager',
    component: () => import('@/components/pages/FileManager')
  }, {
    path: 'gallery',
    component: () => import('@/components/pages/Gallery')
  }, {
    path: 'help-center',
    component: () => import('@/components/pages/HelpCenter')
  }, {
    path: 'invoice',
    component: () => import('@/components/pages/Invoice')
  }, {
    path: 'kanban-board',
    component: () => import('@/components/pages/KanbanBoard')
  }, {
    path: 'pricing',
    component: () => import('@/components/pages/Pricing')
  }, {
    path: 'profile-v1',
    component: () => import('@/components/pages/ProfileV1')
  }, {
    path: 'profile-v2',
    component: () => import('@/components/pages/ProfileV2')
  }, {
    path: 'search-results',
    component: () => import('@/components/pages/SearchResults')
  }, {
    path: 'task-list',
    component: () => import('@/components/pages/TaskList')
  }, {
    path: 'teams',
    component: () => import('@/components/pages/Teams')
  }, {
    path: 'vacancies',
    component: () => import('@/components/pages/Vacancies')
  }, {
    path: 'voting',
    component: () => import('@/components/pages/Voting')
  }]
}, {
  // Layout 2 (Flex)
  path: '/pages',
  component: Layout2Flex,
  children: [{
    path: 'messages-v1/list',
    component: () => import('@/components/pages/MessagesV1List')
  }, {
    path: 'messages-v1/item',
    component: () => import('@/components/pages/MessagesV1Item')
  }, {
    path: 'messages-v1/compose',
    component: () => import('@/components/pages/MessagesV1Compose')
  }, {
    path: 'chat',
    component: () => import('@/components/pages/Chat')
  }, {
    path: 'clients',
    component: () => import('@/components/pages/Clients')
  }]
}, {
  // Blank layout
  path: '/pages',
  component: LayoutBlank,
  children: [{
    path: 'authentication/login-v1',
    component: () => import('@/components/pages/AuthenticationLoginV1')
  }, {
    path: 'authentication/register-v1',
    component: () => import('@/components/pages/AuthenticationRegisterV1')
  }, {
    path: 'authentication/login-v2',
    component: () => import('@/components/pages/AuthenticationLoginV2')
  }, {
    path: 'authentication/register-v2',
    component: () => import('@/components/pages/AuthenticationRegisterV2')
  }, {
    path: 'authentication/login-v3',
    component: () => import('@/components/pages/AuthenticationLoginV3')
  }, {
    path: 'authentication/register-v3',
    component: () => import('@/components/pages/AuthenticationRegisterV3')
  }, {
    path: 'authentication/login-and-register',
    component: () => import('@/components/pages/AuthenticationLoginAndRegister')
  }, {
    path: 'authentication/lock-screen-v1',
    component: () => import('@/components/pages/AuthenticationLockScreenV1')
  }, {
    path: 'authentication/lock-screen-v2',
    component: () => import('@/components/pages/AuthenticationLockScreenV2')
  }, {
    path: 'authentication/password-reset',
    component: () => import('@/components/pages/AuthenticationPasswordReset')
  }, {
    path: 'authentication/email-confirm',
    component: () => import('@/components/pages/AuthenticationEmailConfirm')
  }, {
    path: 'invoice-print',
    component: () => import('@/components/pages/InvoicePrint')
  }]
}]
