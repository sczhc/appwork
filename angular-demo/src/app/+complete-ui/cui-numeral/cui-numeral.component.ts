/// <reference types="numeral" />

import { Component } from '@angular/core';
import * as numeral from 'numeral';

@Component({
  selector: 'cui-numeral', // tslint:disable-line
  templateUrl: './cui-numeral.component.html'
})
export class CuiNumeralComponent {
  example1 = '';
  example2 = '';
  example3 = '';
  example4 = '';
  example5 = '';

  constructor() {
    this.example1 = numeral(1000.1234).format('0,0');
    this.example2 = numeral(1000.1234).format('0,0.00');
    this.example3 = numeral(1000.1234).format('+0,0');
    this.example4 = numeral(1000.1234).format('.00');
    this.example5 = numeral(1000.1234).format('$0,0.00');
  }
}
