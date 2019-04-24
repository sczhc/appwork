import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { FormsRoutingModule } from './forms-routing.module';


// *******************************************************************************
// Libs

import { NouisliderModule } from 'ng2-nouislider';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgSelectModule } from '@ng-select/ng-select';
import { TagInputModule } from 'ngx-chips';
import { ColorPickerModule } from 'ngx-color-picker';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { QuillModule } from '../../vendor/libs/quill/quill.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FileUploadModule } from 'ng2-file-upload';
import { ArchwizardModule } from 'ng2-archwizard';
import { AutosizeModule } from '../../vendor/libs/autosize/autosize.module';
import { TextMaskModule } from 'angular2-text-mask';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';


// *******************************************************************************
// Page components

import { LayoutsAndElementsComponent } from './layouts-and-elements/layouts-and-elements.component';
import { ControlsComponent } from './controls/controls.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { SwitchersComponent } from './switchers/switchers.component';
import { CustomControlsComponent } from './custom-controls/custom-controls.component';
import { SlidersComponent } from './sliders/sliders.component';
import { SelectsAndTagsComponent } from './selects-and-tags/selects-and-tags.component';
import { NgxChipsExampleComponent } from './selects-and-tags/ngx-chips-example.component';
import { PickersComponent } from './pickers/pickers.component';
import { EditorsComponent } from './editors/editors.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { Ng2ArchwizardComponent } from './ng2-archwizard/ng2-archwizard.component';
import { NgbTypeaheadComponent } from './ngb-typeahead/ngb-typeahead.component';
import { ExtrasComponent } from './extras/extras.component';


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    NgbModule,

    NouisliderModule,
    MultiselectDropdownModule,
    NgSelectModule,
    TagInputModule,
    ColorPickerModule,
    LMarkdownEditorModule,
    QuillModule,
    DropzoneModule,
    FileUploadModule,
    ArchwizardModule,
    AutosizeModule,
    TextMaskModule,
    PasswordStrengthBarModule,

    FormsRoutingModule
  ],
  declarations: [
    LayoutsAndElementsComponent,
    ControlsComponent,
    InputGroupsComponent,
    SwitchersComponent,
    CustomControlsComponent,
    SlidersComponent,
    SelectsAndTagsComponent,
    NgxChipsExampleComponent,
    PickersComponent,
    EditorsComponent,
    FileUploadComponent,
    Ng2ArchwizardComponent,
    NgbTypeaheadComponent,
    ExtrasComponent,
  ]
})
export class FormsModule { }
