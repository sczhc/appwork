/* tslint:disable:max-line-length */
import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-ecommerce-product-edit',
  templateUrl: './ecommerce-product-edit.component.html',
  styleUrls: [
    '../../../vendor/libs/ng-select/ng-select.scss',
    '../../../vendor/libs/quill/typography.scss',
    '../../../vendor/libs/quill/editor.scss',
    '../../../vendor/styles/pages/products.scss',
    './ecommerce-product-edit.component.scss'
  ]
})
export class EcommerceProductEditComponent {
  isRTL: boolean;
  isIE10: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Product edit - Pages';
    this.isRTL = appService.isRTL;
    this.isIE10 = this.appService.isIE10;
  }

  // Selects
  statuses = [[1, 'Published'], [ 2, 'Out of stock'], [3, 'Pending'], [4, 'Hidden']];
  categories = [ 'Computers', 'Portable tech', 'Mobile phones', 'Audio', 'Photo and video', 'Video game consoles' ];
  brands = [ 'Apple', 'Blueberry', 'Samsung', 'LG', 'Asus', 'Sony', 'Honor', 'Huawei', 'Xiaomi' ];
  storages = [{ label: '8GB', value: '8GB' }, { label: '16GB', value: '16GB' }, { label: '32GB', value: '32GB' }, { label: '64GB', value: '64GB' }, { label: '128GB', value: '128GB' }];
  colors = [{ label: 'Black', value: '#000' }, { label: 'White', value: '#fff' }, { label: 'Silver', value: 'silver' }, { label: 'Gray', value: 'gray' }, { label: 'Green', value: '#5f9ea0' }, { label: 'Gold', value: '#c5baab' }, { label: 'Pink', value: 'pink' }, { label: 'Red', value: 'red' }];
  warranties = [{ label: 'Standard - 1 year', value: 'Standard - 1 year' }, { label: 'Extended - 2 years | $99', value: 'Extended - 2 years | $99' }];
  shipsFrom = [{ label: 'USA', value: 'USA' }, { label: 'China', value: 'China' }, { label: 'France', value: 'France' }, { label: 'Germany', value: 'Germany' }, { label: 'UK', value: 'UK' }];

  // Product data

  productData = {
    id: 3455632,
    title: 'Samsung Galaxy S7 Edge',
    price: 1049,
    category: 'Mobile phones',
    inStock: 123,
    tax: 25,
    status: 1,

    // Options
    options: {
      brand: 'Samsung',
      storages: ['32GB', '64GB'],
      colors: ['#000', '#5f9ea0', '#c5baab'],
      warranties: ['Standard - 1 year', 'Extended - 2 years | $99'],
      shipsFrom: ['USA', 'China', 'Germany']
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
      { discount: '5', type: 'General', code: '', quantity: '100', period: { start: null, end: null } },
      { discount: '10', type: 'General', code: '', quantity: '', period: { start: '02/01/2018', end: '03/01/2018' } },
      { discount: '20', type: 'Code', code: 'G446DJ', quantity: '100', period: { start: '02/12/2018', end: '03/05/2018' } },
      { discount: '15', type: 'Code', code: 'HDA56D', quantity: '30', period: { start: '02/23/2018', end: '04/06/2018' } },
      { discount: '10', type: 'General', code: '', quantity: '', period: { start: '05/14/2018', end: '05/30/2018' } }
    ],

    // Description
    description: 'Item description'
  };

  editorOptions = {
    modules: {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }, { 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }
  };

  setPrimaryImage (index) {
    const images = this.productData['images'].slice(0);
    images.map((img, _index) => { img.primary = index === _index; });
    this.productData['images'] = images;
  }
}
