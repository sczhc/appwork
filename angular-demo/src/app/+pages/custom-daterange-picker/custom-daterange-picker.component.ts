import { Component, Input, forwardRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

import { AppService } from '../../app.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

//
// Internal helpers

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

//
// Daterange component

@Component({
  selector: 'custom-daterange-picker', // tslint:disable-line
  template: `
  <ng-template #t let-date="date" let-focused="focused">
    <div class="ngb-range-day"
      [ngClass]="{ 'bg-primary text-white': isFrom(date) || isTo(date), 'bg-light ngb-in-range': isHovered(date) || isInside(date) }"
      (mouseenter)="hoveredDate = date"
      (mouseleave)="hoveredDate = null">
      {{ date.day }}
    </div>
  </ng-template>

  <!-- Place ngb-datepicker within popover -->
  <ng-template #popoverContent>
    <ngb-datepicker
      ngModel
      (ngModelChange)="onDateChange($event)"
      [displayMonths]="1"
      [firstDayOfWeek]="firstDayOfWeek"
      [markDisabled]="markDisabled"
      [maxDate]="maxDate"
      [minDate]="minDate"
      [navigation]="navigation"
      [outsideDays]="outsideDays"
      [showWeekdays]="showWeekdays"
      [showWeekNumbers]="showWeekNumbers"
      [startDate]="_startDate"
      [dayTemplate]="t"
      (keydown)="clear($event)"></ngb-datepicker>
    <div class="mt-2 text-right">
      <button type="button" class="btn btn-xs btn-default md-btn-flat"
        (click)="popover.close()">{{closeText}}</button>
      <button *ngIf="allowClear" type="button" class="btn btn-xs btn-secondary md-btn-flat ml-1"
        (click)="clear($event, true)">{{clearText}}</button>
    </div>
  </ng-template>

  <div class="input-group flex-nowrap">
    <input class="form-control"
      [value]="inputValue"
      (keydown)="clear($event)"
      readonly
      style="min-width: 150px">
    <div class="input-group-append">
      <button class="input-group-text" type="button"
        [ngbPopover]="popoverContent"
        triggers="manual"
        container="body"
        [placement]="!isRTL ? (placement + '-right') : (placement + '-left')"
        #popover="ngbPopover"
        (click)="popover.toggle()"
        (keydown)="clear($event)">
        <span class="ion ion-md-calendar" style="cursor: pointer;"></span>
      </button>
    </div>
  </div>
  `,

  styleUrls: ['./custom-daterange-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomDaterangePickerComponent),
    multi: true,
  }]
})
export class CustomDaterangePickerComponent implements ControlValueAccessor {
  public isRTL: boolean;

  private onChange  = Function.prototype;
  private onTouched = Function.prototype;

  _startDate: any;
  inputValue = '';

  // Internal props
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  @ViewChild('popover') popover;

  // Model: ['00/00/00', '00/00/00'] or [null, null]
  @Input() ngModel: NgModel;
  @Input() dateFormat = 'MM/DD/YYYY';
  @Input() firstDayOfWeek = 1;
  @Input() markDisabled = null;
  @Input() maxDate = null;
  @Input() minDate = null;
  @Input() navigation = 'select';
  @Input() outsideDays = 'visible';
  @Input() showWeekdays = true;
  @Input() showWeekNumbers = false;
  @Input() startDate = null;
  @Input() placement = 'bottom';
  @Input() allowClear = true;
  @Input() clearText = 'Clear';
  @Input() closeText = 'Close';

  // Internal helpers
  isHovered = date => {
    return this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      after(date, this.fromDate) &&
      before(date, this.hoveredDate);
  }
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  constructor(private appService: AppService) {
    this.isRTL = appService.isRTL;
    this._startDate = this.startDate;
    this._parseModel(this.ngModel);
  }

  writeValue(value: any) {
    this._parseModel(this.ngModel);
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouched = fn;
  }

  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    if (this.toDate && this.fromDate) { this.popover.close(); }
    this._updateModel();
  }

  clear($event, force = false) {
    // Clear model on backspace or delete key pressed
    if (this.allowClear && (force || $event.keyCode === 46 || $event.keyCode === 8)) {
      this.toDate = null;
      this.fromDate = null;
      this.popover.close();
      this._updateModel();
    }
  }

  private _parseModel(period) {
    this.fromDate = this._fromFormatted(period && period.start);
    this.toDate = this._fromFormatted(period && period.end);
    this._updateValue();
  }

  private _updateModel() {
    if (this.fromDate && this.toDate) {
      this.onChange([this._toFormatted(this.fromDate), this._toFormatted(this.toDate)]);
    } else if (!this.fromDate && !this.toDate) {
      this.onChange([null, null]);
    }
    this._updateValue();
  }

  private _updateValue() {
    this._startDate = this.fromDate ? this.fromDate : this.startDate;

    // Display range only if both dates are defined
    this.inputValue = this.fromDate && this.toDate ?
      this._toFormatted(this.fromDate) + ' - ' + this._toFormatted(this.toDate) :
      '';
  }

  private _toFormatted(date) {
    return moment({ year: date.year, month: date.month - 1, day: date.day }).format(this.dateFormat);
  }

  private _fromFormatted(date) {
    const m = date ? moment(date, this.dateFormat) : null;
    return m && m.isValid() ? { year: m.year(), month: m.month() + 1, day: m.date() } : null;
  }
}
