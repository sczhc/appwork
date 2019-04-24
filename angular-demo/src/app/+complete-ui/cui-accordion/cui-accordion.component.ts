import { Component } from '@angular/core';

@Component({
  selector: 'cui-accordion', // tslint:disable-line
  templateUrl: './cui-accordion.component.html',
  styles: [`
    :host /deep/ ngb-accordion .card + .card {
      margin-top: .25rem;
    }
  `]
})
export class CuiAccordionComponent {}
