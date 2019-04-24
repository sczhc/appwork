import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'forms-layouts-and-elements', // tslint:disable-line
  templateUrl: './layouts-and-elements.component.html'
})
export class LayoutsAndElementsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Layouts and elements - Forms';
  }
}
