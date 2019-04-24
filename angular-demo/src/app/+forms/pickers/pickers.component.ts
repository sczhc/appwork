/* tslint:disable:member-ordering */
import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;


@Component({
  selector: 'forms-pickers', // tslint:disable-line
  templateUrl: './pickers.component.html',
  styleUrls: [
    '../../../vendor/libs/ngb-datepicker/ngb-datepicker.scss',
    '../../../vendor/libs/ngb-timepicker/ngb-timepicker.scss',
    '../../../vendor/libs/ngx-color-picker/ngx-color-picker.scss'
  ]
})
export class PickersComponent {
  isRTL: boolean;

  constructor(private appService: AppService, calendar: NgbCalendar) {
    this.appService.pageTitle = 'Pickers - Forms';
    this.isRTL = appService.isRTL;

    //
    // Ngb Datepicker
    //

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  //
  // Ngb Datepicker
  //

  // Single datepicker

  model: NgbDateStruct = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };

  displayMonths = 2;
  navigation = 'select';
  disabled = false;

  // Range datepicker

  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  //
  // Ngb Timepicker
  //

  time = {hour: 13, minute: 30, second: 30};

  //
  // ngx-color-picker
  //

  defaultColor = '#ff6161';
  rgbaColor = 'rgba(113,107,168,0.5)';
  presetColors = [
    '#fff', '#000', '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3',
    '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107',
    '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'
  ];
}
