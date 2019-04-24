import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'ui-cards', // tslint:disable-line
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Cards - UI elements';
  }
}
