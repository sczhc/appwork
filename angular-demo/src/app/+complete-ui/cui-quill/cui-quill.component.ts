import { Component } from '@angular/core';

@Component({
  selector: 'cui-quill', // tslint:disable-line
  templateUrl: './cui-quill.component.html',
  styleUrls: [
    '../../../vendor/libs/quill/typography.scss',
    '../../../vendor/libs/quill/editor.scss'
  ]
})
export class CuiQuillComponent {
  editorContent = '';
  bubbleEditorContent = '';
}
