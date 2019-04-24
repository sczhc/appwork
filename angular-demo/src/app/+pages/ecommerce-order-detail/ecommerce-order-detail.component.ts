/// <reference types="numeral" />

import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import * as numeral from 'numeral';

@Component({
  selector: 'app-ecommerce-order-detail',
  templateUrl: './ecommerce-order-detail.component.html'
})
export class EcommerceOrderDetailComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Order detail - Pages';
  }

  objectKeys = Object.keys;

  orderData = {
    id: 3455632,
    status: 1,
    lastUpdate: '02/25/2018',
    date: '02/17/2018 16:23',

    billing: {
      name: 'John Doe',
      phone: '123-456-7891',
      email: 'jdoe@email.com',
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
      zipCode: '94108',
      address: '950 Mason St, San Francisco, CA 94108, USA'
    },

    shipping: {
      name: 'John Doe',
      phone: '123-456-7891',
      email: 'jdoe@email.com',
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
      zipCode: '94108',
      address: '950 Mason St, San Francisco, CA 94108, USA'
    },

    items: [{
      image: 'nike-1.jpg',
      title: 'Nike Men Black Liteforce III Sneakers',
      id: 3455632,
      price: 115.10,
      quantity: 2,
      options: {
        color: '#e81e2c',
        size: 'EU 37',
        shipsFrom: 'China'
      }
    }, {
      image: 's7edge-1.jpg',
      title: 'Samsung Galaxy S7 Edge',
      id: 3455644,
      price: 1049.00,
      quantity: 1,
      options: {
        color: '#000',
        storage: '32GB',
        warranty: 'Standard - 1 year',
        shipsFrom: 'China'
      }
    }, {
      image: 'sunglasses.jpg',
      title: 'WALKING 400 BLUE CAT3',
      id: 3455601,
      price: 20.55,
      quantity: 1,
      options: {
        shipsFrom: 'Germany'
      }
    }]
  };

  get orderItems() {
    return this.orderData['items'].reduce((cnt, i) => cnt + i.quantity, 0);
  }

  get orderAmount() {
    return this.formatPrice(
      this.orderData['items'].reduce((cnt, i) => cnt + i.price, 0)
    );
  }

  formatPrice(p) {
    return numeral(p).format('$0,0.00');
  }

  formatOptionLabel(v) {
    return v.replace(/([A-Z])/g, (m, $1) => (' ' + $1.toLowerCase())).replace(/^(.)/, (m, $1) => $1.toUpperCase());
  }

}
