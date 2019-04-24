import { Component, ViewChild, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';

const Masonry = require('masonry-layout/dist/masonry.pkgd.js');

@Component({
  selector: 'miscellaneous-masonry', // tslint:disable-line
  templateUrl: './masonry.component.html',
  styles: [`
    :host /deep/ .masonry-item {
      width: 160px;
      height: 120px;
      float: left;
      background: rgba(0,0,0,.05);
      border: 2px solid rgba(0,0,0,.05);
      border-radius: 5px;
    }

    :host /deep/ .masonry-item--width2 { width: 320px; }
    :host /deep/ .masonry-item--width3 { width: 480px; }
    :host /deep/ .masonry-item--width4 { width: 640px; }

    :host /deep/ .masonry-item--height2 { height: 200px; }
    :host /deep/ .masonry-item--height3 { height: 260px; }
    :host /deep/ .masonry-item--height4 { height: 360px; }
  `]
})
export class MasonryComponent implements AfterViewInit, OnDestroy {
  isRTL: boolean;
  private masonry: any;
  private observer: any;

  @ViewChild('masonryContainer') masonryContainer: any;

  constructor(private appService: AppService, private zone: NgZone) {
    this.appService.pageTitle = 'Masonry - Miscellaneous';
    this.isRTL = appService.isRTL;
  }

  items = [
    { title: 'Item 1', class: '' },
    { title: 'Item 2', class: 'masonry-item--width2 masonry-item--height2' },
    { title: 'Item 3', class: 'masonry-item--height3' },
    { title: 'Item 4', class: 'masonry-item--height2' },
    { title: 'Item 5', class: 'masonry-item--width3' },
    { title: 'Item 6', class: '' },
    { title: 'Item 7', class: '' },
    { title: 'Item 8', class: 'masonry-item--height2' },
    { title: 'Item 9', class: 'masonry-item--width2 masonry-item--height3' },
    { title: 'Item 10', class: '' },
    { title: 'Item 11', class: 'masonry-item--height2' },
    { title: 'Item 12', class: '' },
    { title: 'Item 13', class: 'masonry-item--width2 masonry-item--height2' },
    { title: 'Item 14', class: 'masonry-item--width2' },
    { title: 'Item 15', class: '' },
    { title: 'Item 16', class: 'masonry-item--height2' },
    { title: 'Item 17', class: '' },
    { title: 'Item 18', class: '' },
    { title: 'Item 19', class: 'masonry-item--height3' },
    { title: 'Item 20', class: 'masonry-item--height2' },
    { title: 'Item 21', class: '' },
    { title: 'Item 22', class: '' },
    { title: 'Item 23', class: 'masonry-item--height2' }
  ];

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.masonry = new Masonry(this.masonryContainer.nativeElement, { originLeft: !this.isRTL });

      const MutationObserver = window['MutationObserver'] || window['WebKitMutationObserver'];

      if (MutationObserver) {
        /** Watch for any changes to subtree */
        this.observer = new MutationObserver(() => {
          this.masonry.reloadItems();
          this.masonry.layout();
        });

        this.observer.observe(this.masonryContainer.nativeElement, {
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
