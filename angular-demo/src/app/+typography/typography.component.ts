import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'typography', // tslint:disable-line
  templateUrl: './typography.component.html'
})
export class TypographyComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Typography';
  }
}
