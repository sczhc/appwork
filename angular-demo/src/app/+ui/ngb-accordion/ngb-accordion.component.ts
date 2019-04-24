import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-ngb-accordion', // tslint:disable-line
  templateUrl: './ngb-accordion.component.html',
  styles: [`
    :host /deep/ ngb-accordion .card + .card {
      margin-top: .25rem;
    }
  `]
})
export class NgbAccordionComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ngb Accordion - UI elements';
  }
}
