import { Component } from '@angular/core';
import * as textMaskAddons from 'text-mask-addons/dist/textMaskAddons';

@Component({
  selector: 'cui-angular2-text-mask', // tslint:disable-line
  templateUrl: './cui-angular2-text-mask.component.html'
})
export class CuiAngular2TextMaskComponent {
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
}
