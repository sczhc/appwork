import { Component } from '@angular/core';

@Component({
  selector: 'cui-ng2-archwizard', // tslint:disable-line
  templateUrl: './cui-ng2-archwizard.component.html',
  styleUrls: ['../../../vendor/libs/ng2-archwizard/ng2-archwizard.scss']
})
export class CuiNg2ArchwizardComponent {
  finishFunction() {
    alert('Finished!');
  }
}
