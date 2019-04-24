/// <reference types="numeral" />

import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import * as numeral from 'numeral';

@Component({
  selector: 'miscellaneous-numeraljs', // tslint:disable-line
  templateUrl: './numeraljs.component.html'
})
export class NumeraljsComponent {
  example1 = '';
  example2 = '';
  example3 = '';
  example4 = '';
  example5 = '';

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Numeral.js - Miscellaneous';

    this.example1 = numeral(1000.1234).format('0,0');
    this.example2 = numeral(1000.1234).format('0,0.00');
    this.example3 = numeral(1000.1234).format('+0,0');
    this.example4 = numeral(1000.1234).format('.00');
    this.example5 = numeral(1000.1234).format('$0,0.00');
  }
}
