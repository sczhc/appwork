import { Component, ViewEncapsulation, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../../app.service';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { isSameDay, isSameMonth, differenceInDays, addDays, addMinutes } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();

@Component({
  selector: 'cui-angular-calendar', // tslint:disable-line
  templateUrl: './cui-angular-calendar.component.html',
  styleUrls: [
    '../../../vendor/libs/angular-calendar/angular-calendar.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CuiAngularCalendarComponent implements AfterViewChecked {
  isRTL: boolean;

  events: CalendarEvent[] = [];
  view = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen = false;
  locale = 'en';

  newEventTitle = '';
  newEventType = '';

  refresh: Subject<any> = new Subject();

  constructor(private appService: AppService, private modalService: NgbModal) {
    this.isRTL = appService.isRTL;

    // Events
    this.events = this.createEvents([{
      title: 'All Day Event',
      start: new Date(y, m, d + 2),
      allDay: true
    }, {
      title: 'Long Event',
      start: new Date(y, m, d + 2),
      end: new Date(y, m, d + 6),
      cssClass: 'cal-event-warning'
    }, {
      title: 'Conference',
      start: new Date(y, m, d - 4),
      end: new Date(y, m, d - 2)
    }, {
      title: 'Meeting',
      start: new Date(y, m, d + 7, 10, 30),
      end: new Date(y, m, d  + 7, 12, 30),
      cssClass: 'cal-event-danger'
    }, {
      title: 'Lunch',
      start: new Date(y, m, d + 1, 12, 0),
      cssClass: 'cal-event-info'
    }, {
      title: 'Meeting',
      start: new Date(y, m, d + 1, 14, 30),
      cssClass: 'cal-event-dark'
    }, {
      title: 'Happy Hour',
      start: new Date(y, m, d + 1, 17, 30)
    }, {
      title: 'Dinner',
      start: new Date(y, m, d + 1, 20, 0)
    }, {
      title: 'Birthday Party',
      start: new Date(y, m, d + 1, 7, 0)
    }, {
      title: 'All Day Event',
      start: new Date(y, m, d + 5),
      end: new Date(y, m, d + 7),
      allDay: true
    }]);
  }

  createEvent(_event: CalendarEvent) {
    // Extend event object
    Object.assign(_event, {
      draggable: true,
      resizable: {
        // Disable event resizing in RTL mode
        beforeStart: !this.isRTL,
        afterEnd: !this.isRTL
      },
      actions: [{
        label: '<i class="ion ion-md-create"></i>',
        onClick: ({ event }) => alert(`Edit event "${event.title}"`)
      }, {
        label: '<i class="ion ion-md-close"></i>',
        onClick: ({ event }) => this.events = this.events.filter(ev => ev !== event)
      }]
    });

    // Set default "end" option if event resizeable
    if (!_event.end && !this.isRTL) {
      _event.end = addMinutes(_event.start, 30);
    }

    return _event;
  }

  createEvents(events: CalendarEvent[]): CalendarEvent[] {
    return events.map(_event => this.createEvent(_event));
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent) {
    // RTL support for drag event
    if (this.isRTL && this.view === 'week') {
      const delta = differenceInDays(event.start, newStart);
      newStart = addDays(event.start, delta);
      if (event.end) {
        newEnd = addDays(event.end, delta);
      }
    }

    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }) {
    // Open/close month event details
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event: CalendarEvent) {
    alert(`Event "${event.title}" clicked!`);
  }

  addEvent(content) {
    // Open modal and add event after close
    this.modalService.open(content).result.then((result) => {
      if (this.newEventTitle) {
        this.events.push(this.createEvent({
          title: this.newEventTitle,
          cssClass: this.newEventType,
          start: new Date(+this.viewDate)
        }));
        this.refresh.next();
      }

      this.newEventTitle = '';
      this.newEventType = '';
    }, () => {
      this.newEventTitle = '';
      this.newEventType = '';
    });
  }

  // ------------------------------------------------------------------
  // RTL support
  // Far from a perfect solution, but there is no choice
  //

  @ViewChild('calendarContainer') calendarContainer: ElementRef; // tslint:disable-line

  ngAfterViewChecked() {
    if (this.isRTL && this.view !== 'month') {
      const re = /margin-left:\s*([\d.]+?(?:px|%))/;
      const elements: HTMLElement[] = this.calendarContainer.nativeElement.querySelectorAll('.cal-event-container');

      elements.forEach(el =>
        el.setAttribute(
          'style',
          el.getAttribute('style').replace(re, (_m: string, $1: string) => `margin-right: ${$1}`)
        )
      );
    }
  }
}
