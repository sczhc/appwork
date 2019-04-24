import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { PagesRoutingModule } from './pages-routing.module';


// *******************************************************************************
// Libs

import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { NouisliderModule } from 'ng2-nouislider';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from '../../vendor/libs/quill/quill.module';
import { SortablejsModule } from 'angular-sortablejs';
import { TagInputModule } from 'ngx-chips';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


// Custom daterange picker
import { CustomDaterangePickerComponent } from './custom-daterange-picker/custom-daterange-picker.component';

// *******************************************************************************
// Page components

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
  imports: [
    CommonModule,
    NgFormsModule,
    HttpClientModule,
    NgbModule,

    // Libs
    NgxImageGalleryModule,
    NouisliderModule,
    NgSelectModule,
    QuillModule,
    SortablejsModule,
    TagInputModule,
    PerfectScrollbarModule,

    PagesRoutingModule
  ],
  declarations: [
    CustomDaterangePickerComponent,

    ArticlesListComponent,
    ArticlesEditComponent,
    EducationCoursesV1Component,
    EducationCoursesV2Component,
    EcommerceProductListComponent,
    EcommerceProductItemComponent,
    EcommerceProductEditComponent,
    EcommerceOrderListComponent,
    EcommerceOrderDetailComponent,
    ForumsListComponent,
    ForumsThreadsComponent,
    ForumsDiscussionComponent,
    MessagesV2ListComponent,
    MessagesV2ItemComponent,
    MessagesV2ComposeComponent,
    MessagesV3ListComponent,
    MessagesV3ItemComponent,
    MessagesV3ComposeComponent,
    ProjectsListComponent,
    ProjectsItemComponent,
    TicketsListComponent,
    TicketsEditComponent,
    UsersListComponent,
    UsersViewComponent,
    UsersEditComponent,
    AccountSettingsComponent,
    ContactsComponent,
    FaqComponent,
    FileManagerComponent,
    GalleryComponent,
    HelpCenterComponent,
    InvoiceComponent,
    KanbanBoardComponent,
    PricingComponent,
    ProfileV1Component,
    ProfileV2Component,
    SearchResultsComponent,
    TaskListComponent,
    TeamsComponent,
    VacanciesComponent,
    VotingComponent,
  ]
})
export class PagesModule { }
