import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'cui-angular-2-dropdown-multiselect', // tslint:disable-line
  templateUrl: './cui-angular-2-dropdown-multiselect.component.html',
  styleUrls: ['../../../vendor/libs/angular-2-dropdown-multiselect/angular-2-dropdown-multiselect.scss'],
})
export class CuiAngular2DropdownMultiselectComponent {
  defaultModel: number[];
  defaultOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Sweden' },
    { id: 2, name: 'Norway' },
    { id: 3, name: 'Denmark' },
    { id: 4, name: 'Finland' }
  ];
  defaultSettings: any;

  searchSettings: any;
  iconSettings: any;

  singleModel: number[];
  singleOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Javascript' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'HTML' }
  ];
  singleSettings: any;

  groupedModel: number[];
  groupedOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Car brands' },
    { id: 2, name: 'Volvo', parentId: 1 },
    { id: 3, name: 'Honda', parentId: 1 },
    { id: 4, name: 'BMW', parentId: 1 },
    { id: 5, name: 'Colors' },
    { id: 6, name: 'Blue', parentId: 5 },
    { id: 7, name: 'Red', parentId: 5 },
    { id: 8, name: 'White', parentId: 5 }
  ];
  groupedSettings: any;

  constructor(appService: AppService) {
    this.defaultSettings = {
      pullRight: appService.isRTL
    };
    this.searchSettings = {
      enableSearch: true,
      pullRight: appService.isRTL
    };
    this.iconSettings = {
      showCheckAll: true,
      showUncheckAll: true,
      checkedStyle: 'fontawesome',
      pullRight: appService.isRTL
    };
    this.singleSettings = {
      selectionLimit: 1,
      autoUnselect: true,
      pullRight: appService.isRTL
    };
    this.groupedSettings = {
      pullRight: appService.isRTL
    };
  }
}
