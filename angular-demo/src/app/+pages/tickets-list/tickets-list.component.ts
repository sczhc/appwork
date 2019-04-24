import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html'
})
export class TicketsListComponent {
  isRTL: boolean;

  constructor(private http: HttpClient, private appService: AppService) {
    this.appService.pageTitle = 'User list - Pages';
    this.isRTL = appService.isRTL;
    this.loadData();
  }

  // Filters

  filterPriority = 'Any';
  filterStatus = 'Any';
  filterCreatedDate = [null, null];

  // Table

  // Options
  dataUrl = 'assets/json/pages_tickets_list.json';
  searchKeys = ['id', 'subject'];
  sortBy = 'id';
  sortDesc = true;
  perPage = 10;

  filterVal = '';
  currentPage = 1;
  totalItems = 0;

  ticketsData: Object[] = [];
  originalTicketsData: Object[] = [];

  priorityDropdownVariant (priority) {
    if (priority === 1) { return 'btn-danger'; }
    if (priority === 2) { return 'btn-success'; }
    if (priority === 3) { return 'btn-warning'; }
  }

  loadData() {
    this.http.get(this.dataUrl)
      .subscribe((data: any) => {
        this.originalTicketsData = data.slice(0);
        this.update();
      });
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.perPage);
  }

  update() {
    const data = this.filter(this.originalTicketsData);

    this.totalItems = data.length;

    this.sort(data);
    this.ticketsData = this.paginate(data);
  }

  filter(data) {
    const filter = this.filterVal.toLowerCase();
    return !filter ?
      data.slice(0) :
      data.filter(d => {
        return Object.keys(d)
          .filter(k => this.searchKeys.includes(k))
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(filter) !== -1 || !filter;
      });
  }

  sort(data) {
    data.sort((a: any, b: any) => {
      a = typeof(a[this.sortBy]) === 'string' ? a[this.sortBy].toUpperCase() : a[this.sortBy];
      b = typeof(b[this.sortBy]) === 'string' ? b[this.sortBy].toUpperCase() : b[this.sortBy];

      if (a < b) { return this.sortDesc ? 1 : -1; }
      if (a > b) { return this.sortDesc ? -1 : 1; }
      return 0;
    });
  }

  paginate(data) {
    const perPage = parseInt(String(this.perPage), 10);
    const offset = (this.currentPage - 1) * perPage;

    return data.slice(offset, offset + perPage);
  }

  setSort(key) {
    if (this.sortBy !== key) {
      this.sortBy = key;
      this.sortDesc = false;
    } else {
      this.sortDesc = !this.sortDesc;
    }

    this.currentPage = 1;
    this.update();
  }
}
