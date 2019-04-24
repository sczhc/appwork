/// <reference types="numeral" />

/* tslint:disable:max-line-length */

import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import * as numeral from 'numeral';

@Component({
  selector: 'app-ecommerce-product-item',
  templateUrl: './ecommerce-product-item.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/products.scss'
  ]
})
export class EcommerceProductItemComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Product item - Pages';
    this.isRTL = appService.isRTL;
  }

  productData = {
    id: 3455632,
    title: 'Samsung Galaxy S7 Edge',
    price: 1049,
    category: 'Mobile phones',
    inStock: 123,
    tax: 25,
    status: 1,

    // Statistics
    rating: 4.3,
    reviews: 123,
    sales: 1045,
    views: 65326,
    wished: 3671,

    // Options
    options: {
      brand: 'Samsung',
      storages: ['32GB', '64GB'],
      colors: [['Black', '#000'], ['Green', '#5f9ea0'], ['Gold', '#c5baab']],
      warranties: ['Standard - 1 year', 'Extended - 2 years | $99'],
      ships_from: ['USA', 'China', 'Germany']
    },

    // Meta
    meta: {
      title: 'Samsung Galaxy S7 Edge',
      description: 'Buy Samsung Galaxy S7 Edge!',
      keywords: 'Mobile, Smartphone, Samsung, Galaxy, S3, Edge'
    },

    // Images
    images: <any[]> [
      { image: 's7edge-1.jpg', primary: true },
      { image: 's7edge-2.jpg' },
      { image: 's7edge-3.jpg' },
      { image: 's7edge-4.jpg' }
    ],

    // Discounts
    discounts: [
      { discount: '5', type: 'General', code: '-', quantity: '100', done: '65', startDate: '-', endDate: '-' },
      { discount: '10', type: 'General', code: '-', quantity: '-', done: '-', startDate: '02/01/2018', endDate: '03/01/2018' },
      { discount: '20', type: 'Code', code: 'G446DJ', quantity: '100', done: '-', startDate: '02/12/2018', endDate: '03/05/2018' },
      { discount: '15', type: 'Code', code: 'HDA56D', quantity: '30', done: '-', startDate: '02/23/2018', endDate: '04/06/2018' },
      { discount: '10', type: 'General', code: '-', quantity: '-', done: '-', startDate: '05/14/2018', endDate: '05/30/2018' }
    ],

    // Description
    description: `
<div class="row">
<div class="col-md">
  <p>
    <span class="text-muted">Dimension:</span>&nbsp; 150.9 x 72.6 x 7.7mm</p>
  <p>
    <span class="text-muted">Weight:</span>&nbsp; 157g</p>
  <p>
    <span class="text-muted">Camera Resolution (Rear):</span>&nbsp; Dual Pixel 12.0 MP</p>
  <p>
    <span class="text-muted">Camera Resolution (Front):</span>&nbsp; CMOS 5MP</p>
  <p>
    <span class="text-muted">Battery, Talk Time:</span>&nbsp; 3G CDMA: Up to 36 hours</p>
  <p>
    <span class="text-muted">Battery Type and Size:</span>&nbsp; 3600 mAh</p>
  <p>
    <span class="text-muted">Music Play Time:</span>&nbsp; Up to 66 hours</p>
  <p>
    <span class="text-muted">Video Play Time:</span>&nbsp; Up to 19 hours</p>
  <p>
    <span class="text-muted">Internet Use Time:</span>&nbsp; 3G: Up to 13 hours; LTE: Up to 15 hours; Wi-Fi: Up to 15 hours</p>
  <p>
    <span class="text-muted">Music Play Time:</span>&nbsp; Up to 66 hours</p>
</div>
<div class="col-md">
  <p>
    <span class="text-muted">Internal Memory:</span>&nbsp; 32GB</p>
  <p>
    <span class="text-muted">External Memory:</span>&nbsp; MicroSD (Up to 256GB)</p>
  <p>
    <span class="text-muted">Wi-Fi:</span>&nbsp; 802.11 a/b/g/n/ac 2.4G+5GHz, VHT80 MU-MIMO</p>
  <p>
    <span class="text-muted">USB:</span>&nbsp; USB 2.0</p>
  <p>
    <span class="text-muted">Bluetooth:</span>&nbsp; Bluetooth v4.2</p>
  <p>
    <span class="text-muted">ANT+:</span>&nbsp; Yes</p>
  <p>
    <span class="text-muted">Location Technology:</span>&nbsp; GPS, Glonass</p>
  <p>
    <span class="text-muted">Wi-Fi Direct:</span>&nbsp; Yes</p>
  <p>
    <span class="text-muted">NFC:</span>&nbsp; Yes</p>
  <p>
    <span class="text-muted">Processor Speed, Type:</span>&nbsp; 2.15GHz, 1.6GHz, Quad-Core</p>
</div>
<div class="col-md">
  <p>
    <span class="text-muted">Main Display Resolution:</span>&nbsp; 2560 x 1440 (Quad HD)</p>
  <p>
    <span class="text-muted">Main Display Size:</span>&nbsp; 5.5” (139.5mm)</p>
  <p>
    <span class="text-muted">Main Display Technology:</span>&nbsp; Dual edge Super AMOLED®</p>
  <p>
    <span class="text-muted">Color Depth:</span>&nbsp; 16M</p>
  <p>
    <span class="text-muted">Audio Playing Format:</span>&nbsp; MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA</p>
  <p>
    <span class="text-muted">Video Playing Format:</span>&nbsp; MP4, M4V, 3GP, 3G2, WMV, ASF, AVI, FLV, MKV, WEBM</p>
  <p>
    <span class="text-muted">Video Playing Resolution:</span>&nbsp; UHD 4K (3840 x 2160) @60fps</p>
  <p>
    <span class="text-muted">S-Voice:</span>&nbsp; Yes</p>
</div>
</div>`
};

  get productImage () {
    return this.productData['images'].find(i => !!i.primary).image;
  }

  uiStarClass (i) {
    if (this.productData['rating'] > (i - 1) && this.productData['rating'] < i) { return 'half-filled'; }
    if (this.productData['rating'] >= i) { return 'filled'; }
    return '';
  }

  formatInt (v) {
    return numeral(v).format('0,0');
  }

  formatPrice (p) {
    return numeral(p).format('$0,0.00');
  }
}
