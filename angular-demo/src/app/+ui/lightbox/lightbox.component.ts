import { Component, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';
import 'hammerjs';

@Component({
  selector: 'ui-lightbox', // tslint:disable-line
  templateUrl: './lightbox.component.html',
  styleUrls: ['../../../vendor/libs/ngx-image-gallery/ngx-image-gallery.scss']
})
export class LightboxComponent {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  conf: GALLERY_CONF = {
    imageOffset: '0px',
    imageBorderRadius: '0',
    showDeleteControl: false,
    showImageTitle: false,
  };

  images: GALLERY_IMAGE[] = [
    {
      url: 'assets/img/bg/1.jpg',
      title: 'Image 1',
      altText: 'Image 1',
      thumbnailUrl: 'assets/img/bg/1.jpg'
    },
    {
      url: 'assets/img/bg/2.jpg',
      title: 'Image 2',
      altText: 'Image 2',
      thumbnailUrl: 'assets/img/bg/2.jpg'
    },
    {
      url: 'assets/img/bg/3.jpg',
      title: 'Image 3',
      altText: 'Image 3',
      thumbnailUrl: 'assets/img/bg/3.jpg'
    },
    {
      url: 'assets/img/bg/4.jpg',
      title: 'Image 4',
      altText: 'Image 4',
      thumbnailUrl: 'assets/img/bg/4.jpg'
    }
  ];

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Lightbox - UI elements';
  }

  openGallery(image) {
    this.ngxImageGallery.open(this.images.indexOf(image));
  }
}
