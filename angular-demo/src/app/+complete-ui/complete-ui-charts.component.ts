import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'complete-ui-charts', // tslint:disable-line
  styleUrls: ['./complete-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
<h1 id="main-header" class="bg-dark text-white">
  <span id="main-header-path">Angular Complete UI &nbsp;/&nbsp;</span>
  <span ngbDropdown class="d-inline-block">
    <a href="javascript:void(0)" class="text-white" ngbDropdownToggle>Charts</a>
    <span ngbDropdownMenu class="mt-3">
      <a class="dropdown-item px-4 py-2 text-big" routerLink="/complete-ui">
        <span class="d-inline-block px-2 py-1">Base</span>
      </a>
      <a class="dropdown-item px-4 py-2 text-big" routerLink="/complete-ui/plugins">
        <span class="d-inline-block px-2 py-1">Plugins</span>
      </a>
    </span>
  </span>
</h1>

<cui-angular-google-maps></cui-angular-google-maps>
<cui-ngx-charts></cui-ngx-charts>
<cui-ng-chartist></cui-ng-chartist>
<cui-ng2-charts></cui-ng2-charts>
<cui-ngx-trend></cui-ngx-trend>

<div class="cui-bottom-spacer"></div>
`
})
export class CompleteUiChartsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Charts - Angular Complete UI';
  }
}
