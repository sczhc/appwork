import { Component } from '@angular/core';

// NOTE:
// ngx-markdown-editor dependencies are included globally
//

@Component({
  selector: 'cui-ngx-markdown-editor', // tslint:disable-line
  templateUrl: './cui-ngx-markdown-editor.component.html',
  styleUrls: ['../../../vendor/libs/ngx-markdown-editor/ngx-markdown-editor.scss']
})
export class CuiNgxMarkdownEditorComponent {
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
}
