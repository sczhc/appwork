import { Component, ViewChild, NgZone, OnDestroy } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';
import { AppService } from '../../app.service';
import 'hammerjs';

const Masonry = require('masonry-layout/dist/masonry.pkgd.js');

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['../../../vendor/libs/ngx-image-gallery/ngx-image-gallery.scss']
})
export class GalleryComponent implements OnDestroy {
  constructor(private appService: AppService, private zone: NgZone) {
    this.appService.pageTitle = 'Gallery - Pages';
    this.isRTL = appService.isRTL;
    this.filterByTag();
  }

  @ViewChild('galleryContainer') galleryContainer: any;
  @ViewChild(NgxImageGalleryComponent) gallery: NgxImageGalleryComponent;

  isRTL: boolean;
  curTag = 'all';
  imagesLoaded = 0;
  private masonry: any;
  private observer: any;

  conf: GALLERY_CONF = {
    imageOffset: '0px',
    imageBorderRadius: '0',
    showDeleteControl: false,
    showImageTitle: false,
  };

  originalImages = [
    { url: 'assets/img/bg/1.jpg', thumbnailUrl: 'assets/img/bg/1.jpg', altText: '', tag: 'nature' },
    { url: 'assets/img/bg/2.jpg', thumbnailUrl: 'assets/img/bg/2.jpg', altText: '', tag: 'car' },
    { url: 'assets/img/bg/3.jpg', thumbnailUrl: 'assets/img/bg/3.jpg', altText: '', tag: 'other' },
    { url: 'assets/img/bg/4.jpg', thumbnailUrl: 'assets/img/bg/4.jpg', altText: '', tag: 'other' },
    { url: 'assets/img/bg/5.jpg', thumbnailUrl: 'assets/img/bg/5.jpg', altText: '', tag: 'other' },
    { url: 'assets/img/bg/6.jpg', thumbnailUrl: 'assets/img/bg/6.jpg', altText: '', tag: 'nature' },
    { url: 'assets/img/bg/7.jpg', thumbnailUrl: 'assets/img/bg/7.jpg', altText: '', tag: 'nature' },
    { url: 'assets/img/bg/8.jpg', thumbnailUrl: 'assets/img/bg/8.jpg', altText: '', tag: 'car' },
    { url: 'assets/img/bg/9.jpg', thumbnailUrl: 'assets/img/bg/9.jpg', altText: '', tag: 'animal' },
    { url: 'assets/img/bg/10.jpg', thumbnailUrl: 'assets/img/bg/10.jpg', altText: '', tag: 'animal' },
    { url: 'assets/img/bg/11.jpg', thumbnailUrl: 'assets/img/bg/11.jpg', altText: '', tag: 'other' },
    { url: 'assets/img/bg/12.jpg', thumbnailUrl: 'assets/img/bg/12.jpg', altText: '', tag: 'other' },
    { url: 'assets/img/bg/13.jpg', thumbnailUrl: 'assets/img/bg/13.jpg', altText: '', tag: 'nature' },
    { url: 'assets/img/bg/14.jpg', thumbnailUrl: 'assets/img/bg/14.jpg', altText: '', tag: 'animal' },
    { url: 'assets/img/bg/15.jpg', thumbnailUrl: 'assets/img/bg/15.jpg', altText: '', tag: 'other' },
    { url: 'assets/img/bg/16.jpg', thumbnailUrl: 'assets/img/bg/16.jpg', altText: '', tag: 'other' }
  ];

  images = [];

  filterByTag() {
    if (this.curTag === 'all') {
      this.images = this.originalImages.slice(0);
    } else {
      this.images = this.originalImages.filter(img => img['tag'] === this.curTag);
    }
  }

  setTag(tag: string) {
    this.curTag = tag;
    this.filterByTag();
  }

  imgLoaded () {
    if (++this.imagesLoaded === this.images.length) {
      this.initMasonry();
    }
  }

  openGallery(image) {
    this.gallery.open(this.images.indexOf(image));
  }

  initMasonry() {
    this.zone.runOutsideAngular(() => {
      this.masonry = new Masonry(this.galleryContainer.nativeElement, {
        originLeft: !this.isRTL,
        transitionDuration: '0.3s',
        itemSelector: '.gallery-thumbnail',
        columnWidth: '.gallery-sizer'
      });

      const MutationObserver = window['MutationObserver'] || window['WebKitMutationObserver'];

      if (MutationObserver) {
        /** Watch for any changes to subtree */
        this.observer = new MutationObserver(() => {
          setTimeout(() => {
            this.masonry.reloadItems();
            this.masonry.layout();
          }, 30);
        });

        this.observer.observe(this.galleryContainer.nativeElement, {
          subtree: true,
          childList: true
        });
      }
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.observer) { this.observer.disconnect(); }
      if (this.masonry) { this.masonry.destroy(); }
    });
  }
}
