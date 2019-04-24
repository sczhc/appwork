import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// *******************************************************************************
//

import { CompleteUiPluginsComponent } from './complete-ui-plugins.component';
import { CompleteUiPluginsRoutingModule } from './complete-ui-plugins-routing.module';


// *******************************************************************************
// Libs

import { NouisliderModule } from 'ng2-nouislider';
import { NgSelectModule } from '@ng-select/ng-select';
import { TagInputModule } from 'ngx-chips';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ColorPickerModule } from 'ngx-color-picker';
import { CalendarModule } from 'angular-calendar';
import { AutosizeModule } from '../../vendor/libs/autosize/autosize.module';
import { TextMaskModule } from 'angular2-text-mask';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { QuillModule } from '../../vendor/libs/quill/quill.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FileUploadModule } from 'ng2-file-upload';
import { DragulaModule } from 'ng2-dragula';
import { SortablejsModule } from 'angular-sortablejs';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ContextMenuModule } from 'ngx-contextmenu';
import { LaddaModule } from 'angular2-ladda';
import { ImageCropperModule } from 'ng2-img-cropper';
import { TourNgBootstrapModule } from 'ngx-tour-ng-bootstrap';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { ClipboardModule } from 'ngx-clipboard';
import { BlockUIModule } from 'ng-block-ui';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { ArchwizardModule } from 'ng2-archwizard';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


// *******************************************************************************
// Page components

import { CuiNumeralComponent } from './cui-numeral/cui-numeral.component';
import { CuiNg2NouisliderComponent } from './cui-ng2-nouislider/cui-ng2-nouislider.component';
import { CuiNgSelectComponent } from './cui-ng-select/cui-ng-select.component';
import { CuiAngular2DropdownMultiselectComponent } from './cui-angular-2-dropdown-multiselect/cui-angular-2-dropdown-multiselect.component';
import { CuiNgxColorPickerComponent } from './cui-ngx-color-picker/cui-ngx-color-picker.component';
import { CuiAngularCalendarComponent } from './cui-angular-calendar/cui-angular-calendar.component';
import { CuiNgAutosizeComponent } from './cui-ng-autosize/cui-ng-autosize.component';
import { CuiAngular2TextMaskComponent } from './cui-angular2-text-mask/cui-angular2-text-mask.component';
import { CuiNgxSweetalert2Component } from './cui-ngx-sweetalert2/cui-ngx-sweetalert2.component';
import { CuiNgxToastrComponent } from './cui-ngx-toastr/cui-ngx-toastr.component';
import { CuiAngularConfirmationPopoverComponent } from './cui-angular-confirmation-popover/cui-angular-confirmation-popover.component';
import { CuiNgxMarkdownEditorComponent } from './cui-ngx-markdown-editor/cui-ngx-markdown-editor.component';
import { CuiQuillComponent } from './cui-quill/cui-quill.component';
import { CuiNgxDatatableComponent } from './cui-ngx-datatable/cui-ngx-datatable.component';
import { CuiNg2SmartTableComponent } from './cui-ng2-smart-table/cui-ng2-smart-table.component';
import { CuiNgxDropzoneWrapperComponent } from './cui-ngx-dropzone-wrapper/cui-ngx-dropzone-wrapper.component';
import { CuiNg2FileUploadComponent } from './cui-ng2-file-upload/cui-ng2-file-upload.component';
import { CuiNg2DragulaComponent } from './cui-ng2-dragula/cui-ng2-dragula.component';
import { CuiAngularSortablejsComponent } from './cui-angular-sortablejs/cui-angular-sortablejs.component';
import { CuiNgxSwiperWrapperComponent } from './cui-ngx-swiper-wrapper/cui-ngx-swiper-wrapper.component';
import { CuiNgxContextmenuComponent } from './cui-ngx-contextmenu/cui-ngx-contextmenu.component';
import { CuiAngular2LaddaComponent } from './cui-angular2-ladda/cui-angular2-ladda.component';
import { CuiNg2ImgCropperComponent } from './cui-ng2-img-cropper/cui-ng2-img-cropper.component';
import { CuiNgxTourComponent } from './cui-ngx-tour/cui-ngx-tour.component';
import { CuiNg2PasswordStrengthBarComponent } from './cui-ng2-password-strength-bar/cui-ng2-password-strength-bar.component';
import { CuiNgxClipboardComponent } from './cui-ngx-clipboard/cui-ngx-clipboard.component';
import { CuiMasonryComponent } from './cui-masonry/cui-masonry.component';
import { CuiSpinkitComponent } from './cui-spinkit/cui-spinkit.component';
import { CuiNgBlockUiComponent } from './cui-ng-block-ui/cui-ng-block-ui.component';
import { CuiNgxImageGalleryComponent } from './cui-ngx-image-gallery/cui-ngx-image-gallery.component';
import { CuiNg2ArchwizardComponent } from './cui-ng2-archwizard/cui-ng2-archwizard.component';
import { CuiNgxPerfectScrollbarComponent } from './cui-ngx-perfect-scrollbar/cui-ngx-perfect-scrollbar.component';
import { CuiNgxChipsComponent } from './cui-ngx-chips/cui-ngx-chips.component';
import { CuiPlyrComponent } from './cui-plyr/cui-plyr.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    CompleteUiPluginsRoutingModule,

    // Libs
    NouisliderModule,
    NgSelectModule,
    TagInputModule,
    MultiselectDropdownModule,
    AutosizeModule,
    ColorPickerModule,
    CalendarModule,
    TextMaskModule,
    SweetAlert2Module,
    ConfirmationPopoverModule,
    LMarkdownEditorModule,
    QuillModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    DropzoneModule,
    FileUploadModule,
    DragulaModule,
    SortablejsModule,
    SwiperModule,
    ContextMenuModule,
    LaddaModule,
    ImageCropperModule,
    TourNgBootstrapModule,
    PasswordStrengthBarModule,
    ClipboardModule,
    BlockUIModule,
    NgxImageGalleryModule,
    ArchwizardModule,
    PerfectScrollbarModule
  ],
  declarations: [
    CompleteUiPluginsComponent,

    // Page components
    CuiNumeralComponent,
    CuiNg2NouisliderComponent,
    CuiNgSelectComponent,
    CuiAngular2DropdownMultiselectComponent,
    CuiNgxColorPickerComponent,
    CuiAngularCalendarComponent,
    CuiNgAutosizeComponent,
    CuiAngular2TextMaskComponent,
    CuiNgxSweetalert2Component,
    CuiNgxToastrComponent,
    CuiAngularConfirmationPopoverComponent,
    CuiNgxMarkdownEditorComponent,
    CuiQuillComponent,
    CuiNgxDatatableComponent,
    CuiNg2SmartTableComponent,
    CuiNgxDropzoneWrapperComponent,
    CuiNg2FileUploadComponent,
    CuiNg2DragulaComponent,
    CuiAngularSortablejsComponent,
    CuiNgxSwiperWrapperComponent,
    CuiNgxContextmenuComponent,
    CuiAngular2LaddaComponent,
    CuiNg2ImgCropperComponent,
    CuiNgxTourComponent,
    CuiNg2PasswordStrengthBarComponent,
    CuiNgxClipboardComponent,
    CuiMasonryComponent,
    CuiSpinkitComponent,
    CuiNgBlockUiComponent,
    CuiNgxImageGalleryComponent,
    CuiNg2ArchwizardComponent,
    CuiNgxPerfectScrollbarComponent,
    CuiNgxChipsComponent,
    CuiPlyrComponent
  ]
})
export class CompleteUiPluginsModule { }
