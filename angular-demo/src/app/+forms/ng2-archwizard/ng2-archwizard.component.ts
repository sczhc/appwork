import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'forms-ng2-archwizard', // tslint:disable-line
  templateUrl: './ng2-archwizard.component.html',
  styleUrls: ['../../../vendor/libs/ng2-archwizard/ng2-archwizard.scss']
})
export class Ng2ArchwizardComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Ng2 Archwizard - Forms';
  }

  finishFunction() {
    alert('Finished!');
  }
}
