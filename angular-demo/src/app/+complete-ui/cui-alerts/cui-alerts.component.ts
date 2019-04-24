import { Component } from '@angular/core';

@Component({
  selector: 'cui-alerts', // tslint:disable-line
  templateUrl: './cui-alerts.component.html'
})
export class CuiAlertsComponent {
  public alerts: Array<IAlert> = [];
  public darkAlerts: Array<IAlert> = [];

  constructor() {
    this.alerts.push({
      id: 1,
      type: 'primary',
      message: 'This is a primary alert — check it out!'
    }, {
      id: 2,
      type: 'secondary',
      message: 'This is a secondary alert — check it out!'
    }, {
      id: 3,
      type: 'success',
      message: 'This is a success alert — check it out!'
    }, {
      id: 4,
      type: 'danger',
      message: 'This is a danger alert — check it out!'
    }, {
      id: 5,
      type: 'warning',
      message: 'This is a warning alert — check it out!'
    }, {
      id: 6,
      type: 'info',
      message: 'This is an info alert — check it out!'
    }, {
      id: 7,
      type: 'dark',
      message: 'This is a dark alert — check it out!'
    });

    this.darkAlerts.push({
      id: 1,
      type: 'dark-primary',
      message: 'This is a primary alert — check it out!'
    }, {
      id: 2,
      type: 'dark-secondary',
      message: 'This is a secondary alert — check it out!'
    }, {
      id: 3,
      type: 'dark-success',
      message: 'This is a success alert — check it out!'
    }, {
      id: 4,
      type: 'dark-danger',
      message: 'This is a danger alert — check it out!'
    }, {
      id: 5,
      type: 'dark-warning',
      message: 'This is a warning alert — check it out!'
    }, {
      id: 6,
      type: 'dark-info',
      message: 'This is an info alert — check it out!'
    }, {
      id: 7,
      type: 'dark-dark',
      message: 'This is a dark alert — check it out!'
    });
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public closeDarkAlert(darkAlert: IAlert) {
    const index: number = this.darkAlerts.indexOf(darkAlert);
    this.darkAlerts.splice(index, 1);
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
