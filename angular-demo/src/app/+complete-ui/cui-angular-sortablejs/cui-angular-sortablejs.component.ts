import { Component } from '@angular/core';

@Component({
  selector: 'cui-angular-sortablejs', // tslint:disable-line
  templateUrl: './cui-angular-sortablejs.component.html',
  styles: [`
    :host /deep/ .sortable-example {
      margin: 0;
      padding: 0;
    }
    :host /deep/ .sortable-example li {
      padding: 6px 10px;
      margin-bottom: 8px;
      list-style: none;
    }
    :host /deep/ .sortable-example-inline li {
      margin-right: 8px;
      display: inline-block;
    }
    [dir=rtl] :host /deep/ .sortable-example-inline li {
      margin-right: 0;
      margin-left: 8px;
    }

    :host /deep/ .sortable-example-3 {
      width: 220px;
    }
    :host /deep/ .sortable-example-3 img {
      margin-right: 8px;
      margin-bottom: 8px;
      width: 100px;
      height: 100px;
      border-radius: 999px;
      display: block;
      float: left;
    }
    [dir=rtl] :host /deep/ .sortable-example-3 img {
      margin-right: 0;
      margin-left: 8px;
      float: right;
    }
  `]
})
export class CuiAngularSortablejsComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  images = [
    'assets/img/avatars/1.png',
    'assets/img/avatars/2.png',
    'assets/img/avatars/3.png',
    'assets/img/avatars/4.png'
  ];
}
