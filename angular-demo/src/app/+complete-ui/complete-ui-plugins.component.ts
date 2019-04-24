import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'complete-ui-plugins', // tslint:disable-line
  styleUrls: ['./complete-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
<h1 id="main-header" class="bg-dark text-white">
  <span id="main-header-path">Angular Complete UI &nbsp;/&nbsp;</span>
  <span ngbDropdown class="d-inline-block">
    <a href="javascript:void(0)" class="text-white" ngbDropdownToggle>Plugins</a>
    <span ngbDropdownMenu class="mt-3">
      <a class="dropdown-item px-4 py-2 text-big" routerLink="/complete-ui">
        <span class="d-inline-block px-2 py-1">Base</span>
      </a>
      <a class="dropdown-item px-4 py-2 text-big" routerLink="/complete-ui/charts">
        <span class="d-inline-block px-2 py-1">Charts</span>
      </a>
    </span>
  </span>
</h1>

<cui-numeral></cui-numeral>
<cui-ng2-nouislider></cui-ng2-nouislider>
<cui-ng-select></cui-ng-select>
<cui-ngx-chips></cui-ngx-chips>
<cui-angular-2-dropdown-multiselect></cui-angular-2-dropdown-multiselect>
<cui-ngx-color-picker></cui-ngx-color-picker>
<cui-angular-calendar></cui-angular-calendar>
<cui-ng-autosize></cui-ng-autosize>
<cui-angular2-text-mask></cui-angular2-text-mask>
<cui-ngx-sweetalert2></cui-ngx-sweetalert2>
<cui-ngx-toastr></cui-ngx-toastr>
<cui-angular-confirmation-popover></cui-angular-confirmation-popover>
<cui-ngx-markdown-editor></cui-ngx-markdown-editor>
<cui-quill></cui-quill>
<cui-ngx-datatable></cui-ngx-datatable>
<cui-ng2-smart-table></cui-ng2-smart-table>
<cui-ngx-dropzone-wrapper></cui-ngx-dropzone-wrapper>
<cui-ng2-file-upload></cui-ng2-file-upload>
<cui-ng2-dragula></cui-ng2-dragula>
<cui-angular-sortablejs></cui-angular-sortablejs>
<cui-ngx-swiper-wrapper></cui-ngx-swiper-wrapper>
<cui-ngx-contextmenu></cui-ngx-contextmenu>
<cui-angular2-ladda></cui-angular2-ladda>
<cui-ng2-img-cropper></cui-ng2-img-cropper>
<cui-ngx-tour></cui-ngx-tour>
<cui-ng2-password-strength-bar></cui-ng2-password-strength-bar>
<cui-ngx-clipboard></cui-ngx-clipboard>
<cui-masonry></cui-masonry>
<cui-spinkit></cui-spinkit>
<cui-ng-block-ui></cui-ng-block-ui>
<cui-ngx-image-gallery></cui-ngx-image-gallery>
<cui-ngx-perfect-scrollbar></cui-ngx-perfect-scrollbar>
<cui-ng2-archwizard></cui-ng2-archwizard>
<cui-plyr></cui-plyr>

<div class="cui-bottom-spacer"></div>
`
})
export class CompleteUiPluginsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Plugins - Angular Complete UI';
  }
}
