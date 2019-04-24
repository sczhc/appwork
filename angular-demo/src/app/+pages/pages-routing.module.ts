import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';
import { EducationCoursesV1Component } from './education-courses-v1/education-courses-v1.component';
import { EducationCoursesV2Component } from './education-courses-v2/education-courses-v2.component';
import { EcommerceProductListComponent } from './ecommerce-product-list/ecommerce-product-list.component';
import { EcommerceProductItemComponent } from './ecommerce-product-item/ecommerce-product-item.component';
import { EcommerceProductEditComponent } from './ecommerce-product-edit/ecommerce-product-edit.component';
import { EcommerceOrderListComponent } from './ecommerce-order-list/ecommerce-order-list.component';
import { EcommerceOrderDetailComponent } from './ecommerce-order-detail/ecommerce-order-detail.component';
import { ForumsListComponent } from './forums-list/forums-list.component';
import { ForumsThreadsComponent } from './forums-threads/forums-threads.component';
import { ForumsDiscussionComponent } from './forums-discussion/forums-discussion.component';
import { MessagesV2ListComponent } from './messages-v2-list/messages-v2-list.component';
import { MessagesV2ItemComponent } from './messages-v2-item/messages-v2-item.component';
import { MessagesV2ComposeComponent } from './messages-v2-compose/messages-v2-compose.component';
import { MessagesV3ListComponent } from './messages-v3-list/messages-v3-list.component';
import { MessagesV3ItemComponent } from './messages-v3-item/messages-v3-item.component';
import { MessagesV3ComposeComponent } from './messages-v3-compose/messages-v3-compose.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsItemComponent } from './projects-item/projects-item.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsEditComponent } from './tickets-edit/tickets-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileV1Component } from './profile-v1/profile-v1.component';
import { ProfileV2Component } from './profile-v2/profile-v2.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TeamsComponent } from './teams/teams.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VotingComponent } from './voting/voting.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'articles/list', component: ArticlesListComponent },
    { path: 'articles/edit', component: ArticlesEditComponent },
    { path: 'education/courses-v1', component: EducationCoursesV1Component },
    { path: 'education/courses-v2', component: EducationCoursesV2Component },
    { path: 'e-commerce/product-list', component: EcommerceProductListComponent },
    { path: 'e-commerce/product-item', component: EcommerceProductItemComponent },
    { path: 'e-commerce/product-edit', component: EcommerceProductEditComponent },
    { path: 'e-commerce/order-list', component: EcommerceOrderListComponent },
    { path: 'e-commerce/order-detail', component: EcommerceOrderDetailComponent },
    { path: 'forums/list', component: ForumsListComponent },
    { path: 'forums/threads', component: ForumsThreadsComponent },
    { path: 'forums/discussion', component: ForumsDiscussionComponent },
    { path: 'messages-v2/list', component: MessagesV2ListComponent },
    { path: 'messages-v2/item', component: MessagesV2ItemComponent },
    { path: 'messages-v2/compose', component: MessagesV2ComposeComponent },
    { path: 'messages-v3/list', component: MessagesV3ListComponent },
    { path: 'messages-v3/item', component: MessagesV3ItemComponent },
    { path: 'messages-v3/compose', component: MessagesV3ComposeComponent },
    { path: 'projects/list', component: ProjectsListComponent },
    { path: 'projects/item', component: ProjectsItemComponent },
    { path: 'tickets/list', component: TicketsListComponent },
    { path: 'tickets/edit', component: TicketsEditComponent },
    { path: 'users/list', component: UsersListComponent },
    { path: 'users/view', component: UsersViewComponent },
    { path: 'users/edit', component: UsersEditComponent },
    { path: 'account-settings', component: AccountSettingsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'file-manager', component: FileManagerComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'help-center', component: HelpCenterComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'kanban-board', component: KanbanBoardComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'profile-v1', component: ProfileV1Component },
    { path: 'profile-v2', component: ProfileV2Component },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'vacancies', component: VacanciesComponent },
    { path: 'voting', component: VotingComponent },
  ])],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
