/// <reference types="numeral" />

import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import * as numeral from 'numeral';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Invoice - Pages';
  }

  invoiceData = {
    id: 49029,
    date: 'January 12, 2015',
    dueDate: 'May 12, 2015',
    taxPercent: 25,

    recipient: {
      name: 'Alice Hampton',
      company: 'Company LTD',
      street: '70 Bowman St.',
      city: 'South Windsor, CT 06074',
      country: 'United States',
      phone: '+9 (965) 645 8146',
      email: 'ahampton@mail.com'
    },

    details: {
      bankName: 'Finance Bank',
      country: 'United States',
      city: 'West New York, NJ 07093',
      address: '23 Sussex Ave.',
      iban: 'ETD85039283901259',
      swiftCode: 'AS4F1'
    },

    items: [{
      title: 'Website design and development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
      hourRate: 50,
      hours: 63
    }, {
      title: 'Branding',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
      hourRate: 47.95,
      hours: 36
    }]
  };

  get invoiceSubtotal() {
    return this.invoiceData['items'].reduce((cnt, item) => {
      cnt += item.hourRate * item.hours;
      return cnt;
    }, 0);
  }

  get invoiceTax() {
    return this.invoiceSubtotal * this.invoiceData['taxPercent'] / 100;
  }

  get invoiceTotal() {
    return this.invoiceSubtotal + this.invoiceTax;
  }

  formatPrice(p) {
    return numeral(p).format('$0,0.00');
  }

}
