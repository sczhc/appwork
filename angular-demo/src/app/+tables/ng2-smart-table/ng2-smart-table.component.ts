import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'tables-ng2-smart-table', // tslint:disable-line
  templateUrl: './ng2-smart-table.component.html',
  styleUrls: ['../../../vendor/libs/ng2-smart-table/ng2-smart-table.scss']
})
export class Ng2SmartTableComponent {
  source: LocalDataSource;

  settings = {
    selectMode: 'multi',
    columns: {
      name: {
        title: 'Name'
      },
      gender: {
        title: 'Gender',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'male', title: 'Male' },
              { value: 'female', title: 'Female' },
            ]
          }
        },
        filterFunction(value, filter) {
          return filter === value;
        }
      },
      company: {
        title: 'Company'
      }
    },
    attr: {
      class: 'table table-bordered'
    }
  };

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ng2 Smart Table - Tables';

    this.fetch((data) => {
      this.source = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/json/ngx-datatable-data.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }
}
