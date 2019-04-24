import { Component } from '@angular/core';

@Component({
  selector: 'cui-ngx-charts', // tslint:disable-line
  templateUrl: './cui-ngx-charts.component.html',
  styles: [`
    :host /deep/ .ngx-charts text {
      fill: #4a4a4a;
    }
    :host /deep/ .ngx-charts-outer ngx-charts-legend-entry > .active {
      color: #4a4a4a;
    }
  `]
})
export class CuiNgxChartsComponent {
  colors = {
    domain: ['#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514']
  };

  singleData = [{
    name: 'Germany',
    value: 40632
  }, {
    name: 'United States',
    value: 49737
  }, {
    name: 'France',
    value: 36745
  }, {
    name: 'United Kingdom',
    value: 36240
  }, {
    name: 'Spain',
    value: 33000
  }, {
    name: 'Italy',
    value: 35800
  }];

  multiData = [{
    name: 'Germany',
    series: [{
      name: '1990',
      value: 31476
    }, {
      name: '2000',
      value: 36953
    }, {
      name: '2010',
      value: 40632
    }]
  }, {
    name: 'United States',
    series: [{
      name: '1990',
      value: 37060
    }, {
      name: '2000',
      value: 45986
    }, {
      name: '2010',
      value: 49737
    }]
  }, {
    name: 'France',
    series: [{
      name: '1990',
      value: 29476
    }, {
      name: '2000',
      value: 34774
    }, {
      name: '2010',
      value: 36745
    }]
  }, {
    name: 'United Kingdom',
    series: [{
      name: '1990',
      value: 26424
    }, {
      name: '2000',
      value: 32543
    }, {
      name: '2010',
      value: 36240
    }]
  }];
}
