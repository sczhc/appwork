import { Component } from '@angular/core';
import { AppService } from '../../app.service';

import * as textMaskAddons from 'text-mask-addons/dist/textMaskAddons';

@Component({
  selector: 'forms-extras', // tslint:disable-line
  templateUrl: './extras.component.html'
})
export class ExtrasComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Extras - Forms';
  }

  //
  // angular2-text-mask
  //

  phoneModel = '';
  phoneMaskOptions = {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  };

  numberModel = '';
  numberMaskOptions = {
    mask: textMaskAddons.createNumberMask({
      prefix: '$'
    })
  };

  emailModel = '';
  emailMaskOptions = {
    mask: textMaskAddons.emailMask
  };

  dateModel = '';
  dateMaskOptions = {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: textMaskAddons.createAutoCorrectedDatePipe('mm/dd/yyyy')
  };

  //
  // ng2-password-strength-bar
  //

  password = '';
}
