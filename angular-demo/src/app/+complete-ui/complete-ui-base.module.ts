import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// *******************************************************************************
//

import { CompleteUiBaseComponent } from './complete-ui-base.component';
import { CompleteUiBaseRoutingModule } from './complete-ui-base-routing.module';


// *******************************************************************************
// Libs

import { HoverDropdownModule } from '../../vendor/libs/hover-dropdown/hover-dropdown.module';
import { MegaDropdownModule } from '../../vendor/libs/mega-dropdown/mega-dropdown.module';
import { SidenavModule } from '../../vendor/libs/sidenav/sidenav.module';


// *******************************************************************************
// Page components

import { CuiTypographyComponent } from './cui-typography/cui-typography.component';
import { CuiUtilitiesComponent } from './cui-utilities/cui-utilities.component';
import { CuiButtonsComponent } from './cui-buttons/cui-buttons.component';
import { CuiBadgesComponent } from './cui-badges/cui-badges.component';
import { CuiButtonGroupsComponent } from './cui-button-groups/cui-button-groups.component';
import { CuiButtonDropdownsComponent } from './cui-button-dropdowns/cui-button-dropdowns.component';
import { CuiDropdownsComponent } from './cui-dropdowns/cui-dropdowns.component';
import { CuiNavsComponent } from './cui-navs/cui-navs.component';
import { CuiPaginationComponent } from './cui-pagination/cui-pagination.component';
import { CuiProgressBarsComponent } from './cui-progress-bars/cui-progress-bars.component';
import { CuiListGroupsComponent } from './cui-list-groups/cui-list-groups.component';
import { CuiAlertsComponent } from './cui-alerts/cui-alerts.component';
import { CuiTooltipsAndPopoversComponent } from './cui-tooltips-and-popovers/cui-tooltips-and-popovers.component';
import { CuiModalsComponent } from './cui-modals/cui-modals.component';
import { CuiBreadcrumbsComponent } from './cui-breadcrumbs/cui-breadcrumbs.component';
import { CuiFormControlsComponent } from './cui-form-controls/cui-form-controls.component';
import { CuiCustomCheckboxesAndRadiosComponent } from './cui-custom-checkboxes-and-radios/cui-custom-checkboxes-and-radios.component';
import { CuiCustomSelectComponent } from './cui-custom-select/cui-custom-select.component';
import { CuiFileBrowserComponent } from './cui-file-browser/cui-file-browser.component';
import { CuiFormsComponent } from './cui-forms/cui-forms.component';
import { CuiInputGroupsComponent } from './cui-input-groups/cui-input-groups.component';
import { CuiSwitchersComponent } from './cui-switchers/cui-switchers.component';
import { CuiAppBrandComponent } from './cui-app-brand/cui-app-brand.component';
import { CuiNavbarComponent } from './cui-navbar/cui-navbar.component';
import { CuiSidenavComponent } from './cui-sidenav/cui-sidenav.component';
import { CuiFooterComponent } from './cui-footer/cui-footer.component';
import { CuiTablesComponent } from './cui-tables/cui-tables.component';
import { CuiMediaComponent } from './cui-media/cui-media.component';
import { CuiThumbnailsComponent } from './cui-thumbnails/cui-thumbnails.component';
import { CuiCardsComponent } from './cui-cards/cui-cards.component';
import { CuiCarouselComponent } from './cui-carousel/cui-carousel.component';
import { CuiAccordionComponent } from './cui-accordion/cui-accordion.component';
import { CuiTypeaheadComponent } from './cui-typeahead/cui-typeahead.component';
import { CuiDatepickerComponent } from './cui-datepicker/cui-datepicker.component';
import { CuiTimepickerComponent } from './cui-timepicker/cui-timepicker.component';
import { CuiRatingComponent } from './cui-rating/cui-rating.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    CompleteUiBaseRoutingModule,

    HoverDropdownModule,
    MegaDropdownModule,
    SidenavModule
  ],
  declarations: [
    CompleteUiBaseComponent,

    // Page components
    CuiTypographyComponent,
    CuiUtilitiesComponent,
    CuiButtonsComponent,
    CuiBadgesComponent,
    CuiButtonGroupsComponent,
    CuiButtonDropdownsComponent,
    CuiDropdownsComponent,
    CuiNavsComponent,
    CuiPaginationComponent,
    CuiProgressBarsComponent,
    CuiListGroupsComponent,
    CuiAlertsComponent,
    CuiTooltipsAndPopoversComponent,
    CuiModalsComponent,
    CuiBreadcrumbsComponent,
    CuiFormControlsComponent,
    CuiCustomCheckboxesAndRadiosComponent,
    CuiCustomSelectComponent,
    CuiFileBrowserComponent,
    CuiFormsComponent,
    CuiInputGroupsComponent,
    CuiSwitchersComponent,
    CuiAppBrandComponent,
    CuiNavbarComponent,
    CuiSidenavComponent,
    CuiFooterComponent,
    CuiTablesComponent,
    CuiMediaComponent,
    CuiThumbnailsComponent,
    CuiCardsComponent,
    CuiCarouselComponent,
    CuiAccordionComponent,
    CuiTypeaheadComponent,
    CuiDatepickerComponent,
    CuiTimepickerComponent,
    CuiRatingComponent
  ]
})
export class CompleteUiBaseModule { }
