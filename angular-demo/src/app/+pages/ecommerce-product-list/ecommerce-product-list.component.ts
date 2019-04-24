/// <reference types="numeral" />

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../app.service';
import * as numeral from 'numeral';

@Component({
  selector: 'app-ecommerce-product-list',
  templateUrl: './ecommerce-product-list.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/products.scss',
    '../../../vendor/libs/ng2-nouislider/ng2-nouislider.scss'
  ]
})
export class EcommerceProductListComponent {
  isRTL: boolean;

  constructor(private http: HttpClient, private appService: AppService) {
    this.appService.pageTitle = 'Product list - Pages';
    this.isRTL = appService.isRTL;

    if (appService.isRTL) {
      this.filterSalesOptions['direction'] = 'rtl';
      this.filterPriceOptions['direction'] = 'rtl';
    }

    this.loadData();
  }

  // Filters

  filterSales = [10, 834];
  filterPrice = [10, 2000];
  filterStatus = 'Any';

  // Filter options
  filterSalesOptions: Object = {
    step: 10,
    tooltips: true,
    range: {
      'min': [ 10 ],
      'max': [ 834 ]
    },
    direction: 'ltr',
    format: {
      to: function (value: any) {
        return Math.round(value);
      },
      from: function (value) {
        return value;
      }
    }
  };
  filterPriceOptions: Object = {
    step: 50,
    tooltips: true,
    range: {
      'min': [ 10 ],
      'max': [ 2000 ]
    },
    direction: 'ltr',
    format: {
      to: function (value) {
        return numeral(value).format('$0,0');
      },
      from: function (value) {
        return value.replace(/[$,]/g, '');
      }
    }
  };

  // Table

  // Options
  dataUrl = 'assets/json/pages_e-commerce_product-list.json';
  searchKeys = ['title', 'id', 'price'];
  sortBy = 'id';
  sortDesc = true;
  perPage = 10;

  filterVal = '';
  currentPage = 1;
  totalItems = 0;

  productsData: Object[] = [];
  originalProductsData: Object[] = [];

  formatPrice(price, dropDecimals = false) {
    return numeral(price).format(dropDecimals ? '$0,0' : '$0,0.00');
  }

  formatNumber(value) {
    return numeral(value).format('0,0');
  }

  loadData() {
    this.http.get(this.dataUrl)
      .subscribe((data: any) => {
        this.originalProductsData = data.slice(0);
        this.update();
      });
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.perPage);
  }

  update() {
    const data = this.filter(this.originalProductsData);

    this.totalItems = data.length;

    this.sort(data);
    this.productsData = this.paginate(data);
  }

  filter(data) {
    const filter = this.filterVal.toLowerCase();
    return !filter ?
      data.slice(0) :
      data.filter(d => {
        return Object.keys(d)
          .filter(k => this.searchKeys.includes(k))
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(filter) !== -1 || !filter;
      });
  }

  sort(data) {
    data.sort((a: any, b: any) => {
      a = typeof(a[this.sortBy]) === 'string' ? a[this.sortBy].toUpperCase() : a[this.sortBy];
      b = typeof(b[this.sortBy]) === 'string' ? b[this.sortBy].toUpperCase() : b[this.sortBy];

      if (a < b) { return this.sortDesc ? 1 : -1; }
      if (a > b) { return this.sortDesc ? -1 : 1; }
      return 0;
    });
  }

  paginate(data) {
    const perPage = parseInt(String(this.perPage), 10);
    const offset = (this.currentPage - 1) * perPage;

    return data.slice(offset, offset + perPage);
  }

  setSort(key) {
    if (this.sortBy !== key) {
      this.sortBy = key;
      this.sortDesc = false;
    } else {
      this.sortDesc = !this.sortDesc;
    }

    this.currentPage = 1;
    this.update();
  }
}
