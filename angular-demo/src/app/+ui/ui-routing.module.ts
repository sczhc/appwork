import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { NavsComponent } from './navs/navs.component';
import { PaginationAndBreadcrumbsComponent } from './pagination-and-breadcrumbs/pagination-and-breadcrumbs.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ModalsComponent } from './modals/modals.component';
import { TooltipsAndPopoversComponent } from './tooltips-and-popovers/tooltips-and-popovers.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { CardsComponent } from './cards/cards.component';
import { NgbAccordionComponent } from './ngb-accordion/ngb-accordion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppBrandComponent } from './app-brand/app-brand.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { PlyrComponent } from './plyr/plyr.component';
import { Ng2ImgCropperComponent } from './ng2-img-cropper/ng2-img-cropper.component';
import { NgxTourComponent } from './ngx-tour/ngx-tour.component';
import { AngularCalendarComponent } from './angular-calendar/angular-calendar.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'buttons', component: ButtonsComponent },
    { path: 'badges', component: BadgesComponent },
    { path: 'button-groups', component: ButtonGroupsComponent },
    { path: 'dropdowns', component: DropdownsComponent },
    { path: 'navs', component: NavsComponent },
    { path: 'pagination-and-breadcrumbs', component: PaginationAndBreadcrumbsComponent },
    { path: 'progress-bars', component: ProgressBarsComponent },
    { path: 'list-groups', component: ListGroupsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'modals', component: ModalsComponent },
    { path: 'tooltips-and-popovers', component: TooltipsAndPopoversComponent },
    { path: 'thumbnails', component: ThumbnailsComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'ngb-accordion', component: NgbAccordionComponent },
    { path: 'app-brand', component: AppBrandComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'sidenav', component: SidenavComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'lightbox', component: LightboxComponent },
    { path: 'drag-and-drop', component: DragAndDropComponent },
    { path: 'plyr', component: PlyrComponent },
    { path: 'ng2-img-cropper', component: Ng2ImgCropperComponent },
    { path: 'ngx-tour', component: NgxTourComponent },
    { path: 'angular-calendar', component: AngularCalendarComponent }
  ])],
  exports: [RouterModule]
})
export class UiRoutingModule { }
