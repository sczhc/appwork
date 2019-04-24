import { Component, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

@Component({
  selector: 'ui-ng2-img-cropper', // tslint:disable-line
  templateUrl: './ng2-img-cropper.component.html'
})
export class Ng2ImgCropperComponent {
  cropperSettings: CropperSettings;
  data: any;

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ng2 Img Cropper - UI elements';

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;
    this.data = {};
  }

  fileChangeListener($event) {
    const image: any = new Image();
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (loadEvent: any) => {
      image.src = loadEvent.target.result;
      this.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);
  }
}
