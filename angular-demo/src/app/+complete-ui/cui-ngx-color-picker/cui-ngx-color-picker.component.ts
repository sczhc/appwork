import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-ngx-color-picker', // tslint:disable-line
  templateUrl: './cui-ngx-color-picker.component.html',
  styleUrls: ['../../../vendor/libs/ngx-color-picker/ngx-color-picker.scss'],
})
export class CuiNgxColorPickerComponent {
  isRTL: boolean;

  defaultColor = '#ff6161';
  rgbaColor = 'rgba(113,107,168,0.5)';
  presetColors = [
    '#fff', '#000', '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3',
    '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107',
    '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'
  ];

  constructor(appService: AppService) {
    this.isRTL = appService.isRTL;
  }
}
