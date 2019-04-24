import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'complete-ui-base', // tslint:disable-line
  styleUrls: ['./complete-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
<h1 id="main-header" class="bg-dark text-white">
  <span id="main-header-path">Angular Complete UI &nbsp;/&nbsp;</span>
  <span ngbDropdown class="d-inline-block">
    <a href="javascript:void(0)" class="text-white" ngbDropdownToggle>Base</a>
    <span ngbDropdownMenu class="mt-3">
      <a class="dropdown-item px-4 py-2 text-big" routerLink="/complete-ui/plugins">
        <span class="d-inline-block px-2 py-1">Plugins</span>
      </a>
      <a class="dropdown-item px-4 py-2 text-big" routerLink="/complete-ui/charts">
        <span class="d-inline-block px-2 py-1">Charts</span>
      </a>
    </span>
  </span>
</h1>

<cui-typography></cui-typography>
<cui-utilities></cui-utilities>
<cui-buttons></cui-buttons>
<cui-badges></cui-badges>
<cui-button-groups></cui-button-groups>
<cui-button-dropdowns></cui-button-dropdowns>
<cui-dropdowns></cui-dropdowns>
<cui-navs></cui-navs>
<cui-pagination></cui-pagination>
<cui-progress-bars></cui-progress-bars>
<cui-list-groups></cui-list-groups>
<cui-alerts></cui-alerts>
<cui-tooltips-and-popovers></cui-tooltips-and-popovers>
<cui-modals></cui-modals>
<cui-breadcrumbs></cui-breadcrumbs>
<cui-form-controls></cui-form-controls>
<cui-custom-checkboxes-and-radios></cui-custom-checkboxes-and-radios>
<cui-custom-select></cui-custom-select>
<cui-file-browser></cui-file-browser>
<cui-forms></cui-forms>
<cui-input-groups></cui-input-groups>
<cui-switchers></cui-switchers>
<cui-app-brand></cui-app-brand>
<cui-navbar></cui-navbar>
<cui-sidenav></cui-sidenav>
<cui-footer></cui-footer>
<cui-tables></cui-tables>
<cui-media></cui-media>
<cui-thumbnails></cui-thumbnails>
<cui-cards></cui-cards>
<cui-accordion></cui-accordion>
<cui-carousel></cui-carousel>
<cui-typeahead></cui-typeahead>
<cui-datepicker></cui-datepicker>
<cui-timepicker></cui-timepicker>
<cui-rating></cui-rating>

<div class="cui-bottom-spacer"></div>
`
})
export class CompleteUiBaseComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Base - Angular Complete UI';
  }
}
