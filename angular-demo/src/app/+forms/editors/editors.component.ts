import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'forms-editors', // tslint:disable-line
  templateUrl: './editors.component.html',
  styleUrls: [
    '../../../vendor/libs/ngx-markdown-editor/ngx-markdown-editor.scss',
    '../../../vendor/libs/quill/typography.scss',
    '../../../vendor/libs/quill/editor.scss'
  ]
})
export class EditorsComponent {
  isIE10: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Editors - Forms';
    this.isIE10 = this.appService.isIE10;
  }

  markdownText = `### Hello there
How are you?

I have bellow task for you :

Select from this text...
Click the bold on THIS WORD and make THESE ONE italic
Link GOOGLE to google.com
Test to insert image (and try to tab after write the image description)
Test Preview
And ending here... Click "List"

Enjoy!`;

  editorContent = '';
  bubbleEditorContent = '';
}
