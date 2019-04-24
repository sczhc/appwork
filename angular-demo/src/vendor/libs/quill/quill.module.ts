import { NgModule, Component } from '@angular/core';

import { QuillEditorComponent } from './quill.component';

@NgModule({
  declarations: [QuillEditorComponent],
  exports: [QuillEditorComponent]
})
export class QuillModule { }
