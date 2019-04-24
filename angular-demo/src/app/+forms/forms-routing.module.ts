import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutsAndElementsComponent } from './layouts-and-elements/layouts-and-elements.component';
import { ControlsComponent } from './controls/controls.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { SwitchersComponent } from './switchers/switchers.component';
import { CustomControlsComponent } from './custom-controls/custom-controls.component';
import { SlidersComponent } from './sliders/sliders.component';
import { SelectsAndTagsComponent } from './selects-and-tags/selects-and-tags.component';
import { PickersComponent } from './pickers/pickers.component';
import { EditorsComponent } from './editors/editors.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { Ng2ArchwizardComponent } from './ng2-archwizard/ng2-archwizard.component';
import { NgbTypeaheadComponent } from './ngb-typeahead/ngb-typeahead.component';
import { ExtrasComponent } from './extras/extras.component';


// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'layouts-and-elements', component: LayoutsAndElementsComponent },
    { path: 'controls', component: ControlsComponent },
    { path: 'input-groups', component: InputGroupsComponent },
    { path: 'switchers', component: SwitchersComponent },
    { path: 'custom-controls', component: CustomControlsComponent },
    { path: 'sliders', component: SlidersComponent },
    { path: 'selects-and-tags', component: SelectsAndTagsComponent },
    { path: 'pickers', component: PickersComponent },
    { path: 'editors', component: EditorsComponent },
    { path: 'file-upload', component: FileUploadComponent },
    { path: 'ng2-archwizard', component: Ng2ArchwizardComponent },
    { path: 'ngb-typeahead', component: NgbTypeaheadComponent },
    { path: 'extras', component: ExtrasComponent },
  ])],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
