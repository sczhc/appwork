import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cui-ng2-dragula', // tslint:disable-line
  templateUrl: './cui-ng2-dragula.component.html',
  styleUrls: [
    '../../../vendor/libs/ng2-dragula/ng2-dragula.scss',
    './cui-ng2-dragula.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CuiNg2DragulaComponent {
  movesFn(el: any, container: any, handle: any) {
    return handle.classList.contains('handle');
  }
}
