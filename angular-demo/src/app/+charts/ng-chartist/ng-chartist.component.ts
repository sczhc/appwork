/* tslint:disable:member-ordering */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'charts-ng-chartist', // tslint:disable-line
  templateUrl: './ng-chartist.component.html',
  styleUrls: ['../../../vendor/libs/ng-chartist/ng-chartist.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgChartistComponent {
  data1 = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [ 8, 14, 5, 13, 12 ],
      [ 7, 8, 1, 3, 1 ],
      [ 5, 12, 1, 9, 7 ]
    ]
  };
  options1 = {
    fullWidth: true,
    chartPadding: {
      right: 40
    }
  };

  data2 = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [ 1, -1, -2, 0, 2, -1, -2, -1 ],
      [ -2, -1, 0, -3, -2, 1, -3, 2 ],
      [ 2, -1, -1, -3, -2, 0, -1, 1 ],
      [ 1, -3, 2, -3, -3, 2, -2, -3 ]
    ]
  };
  options2 = {
    high: 3,
    low: -3,
    showArea:  true,
    showLine:  false,
    showPoint: false,
    fullWidth: true,
    axisX: {
      showLabel: false,
      showGrid:  false
    }
  };

  data3 = {
    labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
    series: [
      [ 75177, 30327, 33902, 45922 ],
      [ 67592, 31235, 64863, 78175 ],
      [ 1978, 1951, 8121, 8132 ]
    ]
  };
  options3 = {
    seriesBarDistance: 10,
    axisX: { offset: 60 },
    axisY: {
      offset: 80,
      scaleMinSpace: 15,

      labelInterpolationFnc: function(value) {
        return value + ' CHF';
      }
    }
  };

  data4 = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
      [ 8, 2, 8, 2, 1, 4, 5 ],
      [ 5, 1, 7, 4, 6, 5, 6 ]
    ]
  };
  options4 = {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: { offset: 70 }
  };

  sum(a, b) {
    return a + b;
  }
  data5 = {
    series: [ 3, 5, 7 ]
  };
  options5 = {
    labelInterpolationFnc: value => {
      return Math.round(value / this.data5.series.reduce(this.sum) * 100) + '%';
    }
  };

  data6 = {
    series: [20, 10, 30, 40]
  };
  options6 = {
    donut:      true,
    donutWidth: 60,
    startAngle: 270,
    total:      200,
    showLabel:  false
  };

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ng Chartist - Charts';
  }
}
