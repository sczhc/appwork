import { Component, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';
import 'hammerjs';

@Component({
  selector: 'cui-ngx-image-gallery', // tslint:disable-line
  templateUrl: './cui-ngx-image-gallery.component.html',
  styleUrls: ['../../../vendor/libs/ngx-image-gallery/ngx-image-gallery.scss']
})
export class CuiNgxImageGalleryComponent {
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

  openGallery(image) {
    this.ngxImageGallery.open(this.images.indexOf(image));
  }
}
