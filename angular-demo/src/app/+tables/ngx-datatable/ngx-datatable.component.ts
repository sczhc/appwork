import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AppService } from '../../app.service';

@Component({
  selector: 'tables-ngx-datatable', // tslint:disable-line
  templateUrl: './ngx-datatable.component.html',
  styleUrls: [
    '../../../../node_modules/@swimlane/ngx-datatable/release/index.css',
    '../../../vendor/libs/ngx-datatable/ngx-datatable.scss',
    '../../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxDatatableComponent {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  loadingIndicator = true;
  rows = [];
  temp = [];
  selected = [];

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ngx Datatable - Tables';

    this.fetch((data) => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;

      setTimeout(() => { this.loadingIndicator = false; }, 1500);
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

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
}
