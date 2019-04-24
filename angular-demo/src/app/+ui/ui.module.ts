import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { UiRoutingModule } from './ui-routing.module';


// *******************************************************************************
// Libs

import { HoverDropdownModule } from '../../vendor/libs/hover-dropdown/hover-dropdown.module';
import { MegaDropdownModule } from '../../vendor/libs/mega-dropdown/mega-dropdown.module';
import { SidenavModule } from '../../vendor/libs/sidenav/sidenav.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { DragulaModule } from 'ng2-dragula';
import { SortablejsModule } from 'angular-sortablejs';
import { ImageCropperModule } from 'ng2-img-cropper';
import { TourNgBootstrapModule } from 'ngx-tour-ng-bootstrap';
import { CalendarModule } from 'angular-calendar';


// *******************************************************************************
// Page components

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
import { AppBrandComponent } from './app-brand/app-brand.component';
import { NavbarComponent } from './navbar/navbar.component';
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
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    HoverDropdownModule,
    MegaDropdownModule,
    SidenavModule,
    ContextMenuModule,
    SweetAlert2Module,
    ConfirmationPopoverModule,
    SwiperModule,
    NgxImageGalleryModule,
    DragulaModule,
    SortablejsModule,
    ImageCropperModule,
    TourNgBootstrapModule,
    CalendarModule,

    UiRoutingModule
  ],
  declarations: [
    ButtonsComponent,
    BadgesComponent,
    ButtonGroupsComponent,
    DropdownsComponent,
    NavsComponent,
    PaginationAndBreadcrumbsComponent,
    ProgressBarsComponent,
    ListGroupsComponent,
    NotificationsComponent,
    ModalsComponent,
    TooltipsAndPopoversComponent,
    ThumbnailsComponent,
    CardsComponent,
    NgbAccordionComponent,
    AppBrandComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    CarouselComponent,
    LightboxComponent,
    DragAndDropComponent,
    PlyrComponent,
    Ng2ImgCropperComponent,
    NgxTourComponent,
    AngularCalendarComponent
  ]
})
export class UiModule { }
