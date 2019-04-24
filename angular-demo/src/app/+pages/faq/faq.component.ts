import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  accordionsCount = 24;
  accordionStates: boolean[] = [];

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'FAQ - Pages';

    for (let i = 0; i < this.accordionsCount; i++) { this.accordionStates.push(true); }
  }
}
