import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cui-ngx-chips', // tslint:disable-line
  templateUrl: './cui-ngx-chips.component.html',
  styleUrls: [
    '../../../vendor/libs/ngx-chips/ngx-chips.scss',
    '../../../vendor/libs/ng2-dropdown-menu/ng2-dropdown-menu.scss'
  ],
  // Have to use `ViewEncapsulation.None` to restyle ng2-dropdown-menu
  encapsulation: ViewEncapsulation.None
})
export class CuiNgxChipsComponent {
  items = ['Spider-Man', 'Superman', 'Iron Man'];
  autocompleteItems = [
    'Spider-Man', 'Superman', 'Iron Man', 'Wolverine', 'Captain America', 'Ant-Man',
    'Wonder Woman', 'Hulk', 'Flash', 'Green Arrow', 'Silver Surfer', 'Thor', 'Batman',
    'Deadpool', 'The Green Lantern', 'Daredevil', 'Black Widow', 'Hawkeye', 'Catwoman',
  ];
  disabled = false;
}
