import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'cui-ng2-file-upload', // tslint:disable-line
  templateUrl: './cui-ng2-file-upload.component.html',
  styles: [`
    :host /deep/ .ng2-file-upload-drop-zone {
      border: 3px dashed rgba(24, 28, 33, 0.1);
    }
    :host /deep/ .ng2-file-upload-file-over {
      border-color: rgba(24, 28, 33, 0.3);
    }
`]
})
export class CuiNg2FileUploadComponent {
  uploader = new FileUploader({ url: 'https://evening-anchorage-3159.herokuapp.com/api/' });
  hasBaseDropZoneOver = false;

  fileOver(e: any) {
    this.hasBaseDropZoneOver = e;
  }
}
