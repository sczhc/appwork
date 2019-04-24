/* tslint:disable:member-ordering */
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from '../../app.service';
import { DropzoneDirective } from 'ngx-dropzone-wrapper';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'forms-file-upload', // tslint:disable-line
  templateUrl: './file-upload.component.html',
  styleUrls: [
    '../../../vendor/libs/ngx-dropzone-wrapper/ngx-dropzone-wrapper.scss',
    './file-upload.scss'
  ]
})
export class FileUploadComponent implements AfterViewInit {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'File upload - Forms';
  }

  //
  // ngx-dropzone-wrapper
  //

  dropzoneConfig = {
    url: '/upload',
    parallelUploads: 2,
    maxFilesize:     50000,
    filesizeBase:    1000,
    addRemoveLinks:  true,
    previewTemplate: `
<div class="dz-preview dz-file-preview">
  <div class="dz-details">
    <div class="dz-thumbnail">
      <img data-dz-thumbnail>
      <span class="dz-nopreview">No preview</span>
      <div class="dz-success-mark"></div>
      <div class="dz-error-mark"></div>
      <div class="dz-error-message"><span data-dz-errormessage></span></div>
      <div class="progress">
        <div class="progress-bar progress-bar-primary"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          data-dz-uploadprogress></div>
      </div>
    </div>
    <div class="dz-filename" data-dz-name></div>
    <div class="dz-size" data-dz-size></div>
  </div>
</div>`
  };

  // ***************************************************************************
  // Mock the file upload progress (only for the demo)
  //

  @ViewChild(DropzoneDirective) dropzoneInstance: DropzoneDirective;

  ngAfterViewInit() {
    const component = this;

    this.dropzoneInstance.dropzone().uploadFiles = function(files) {
      const minSteps         = 6;
      const maxSteps         = 60;
      const timeBetweenSteps = 100;
      const bytesPerStep     = 100000;
      const isUploadSuccess  = Math.round(Math.random());

      const self = this;

      for (let i = 0; i < files.length; i++) {

        const file = files[i];
        const totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

        for (let step = 0; step < totalSteps; step++) {
          const duration = timeBetweenSteps * (step + 1);

          setTimeout(function(_file, _totalSteps, _step) {
            return function() {
              _file.upload = {
                progress: 100 * (_step + 1) / _totalSteps,
                total: _file.size,
                bytesSent: (_step + 1) * _file.size / _totalSteps
              };

              self.emit('uploadprogress', _file, _file.upload.progress, _file.upload.bytesSent);
              if (_file.upload.progress === 100) {

                if (isUploadSuccess) {
                  _file.status = component.dropzoneInstance.DZ_SUCCESS;
                  self.emit('success', _file, 'success', null);
                } else {
                  _file.status = component.dropzoneInstance.DZ_ERROR;
                  self.emit('error', _file, 'Some upload error', null);
                }

                self.emit('complete', _file);
                self.processQueue();
              }
            };
          }(file, totalSteps, step), duration);
        }
      }
    };
  }

  //
  // ng2-file-upload
  //

  uploader = new FileUploader({ url: 'https://evening-anchorage-3159.herokuapp.com/api/' });
  hasBaseDropZoneOver = false;

  fileOver(e: any) {
    this.hasBaseDropZoneOver = e;
  }

}
