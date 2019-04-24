import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'cui-ngx-sweetalert2', // tslint:disable-line
  templateUrl: './cui-ngx-sweetalert2.component.html',
  styleUrls: ['../../../vendor/libs/ngx-sweetalert2/ngx-sweetalert2.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CuiNgxSweetalert2Component {
  isIE10 = false;

  constructor(private appService: AppService) {
    this.isIE10 = this.appService.isIE10;
  }

  checkboxValidation(result) {
    return new Promise(function(resolve, reject) {
      if (result) {
        resolve();
      } else {
        reject('You need to agree with T&C');
      }
    });
  }
}
